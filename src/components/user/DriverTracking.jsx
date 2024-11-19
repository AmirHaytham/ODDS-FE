import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import api from '../../services/api';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

function DriverTracking({ orderId }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);
  const [eta, setEta] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [orderResponse, locationResponse] = await Promise.all([
          api.get(`/orders/${orderId}`),
          api.get(`/orders/${orderId}/driver-location`)
        ]);
        
        setOrderInfo(orderResponse.data);
        setDriverLocation(locationResponse.data.location);
        setEta(locationResponse.data.eta);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();

    // Set up real-time location updates
    const locationSocket = new WebSocket(
      `${process.env.REACT_APP_WS_URL}/track-driver/${orderId}`
    );

    locationSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setDriverLocation(data.location);
      setEta(data.eta);
    };

    return () => {
      locationSocket.close();
    };
  }, [orderId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{t('orderTracking')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">{t('orderStatus')}</h3>
            <p className="text-lg">{orderInfo.status}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">{t('driverName')}</h3>
            <p className="text-lg">{orderInfo.driver.name}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">{t('estimatedArrival')}</h3>
            <p className="text-lg">{eta} mins</p>
          </div>
        </div>
      </div>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={driverLocation}
          zoom={15}
        >
          {driverLocation && (
            <Marker
              position={driverLocation}
              icon={{
                url: '/driver-marker.png',
                scaledSize: new window.google.maps.Size(40, 40)
              }}
            />
          )}
          {orderInfo.deliveryLocation && (
            <Marker
              position={orderInfo.deliveryLocation}
              icon={{
                url: '/destination-marker.png',
                scaledSize: new window.google.maps.Size(40, 40)
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">{t('deliveryUpdates')}</h3>
        <div className="space-y-2">
          {orderInfo.updates.map((update, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-gray-600">
                {new Date(update.timestamp).toLocaleTimeString()} - {update.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverTracking; 