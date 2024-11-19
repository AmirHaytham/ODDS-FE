import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { orderAPI } from '../../services/api/orderAPI';

function OrderHistory() {
  const { t } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderAPI.getOrders();
        setOrders(response.data);
      } catch (err) {
        setError(t('common.error'));
        console.error('Orders fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [t]);

  if (loading) return <div className="text-center py-4">{t('common.loading')}</div>;
  if (error) return <div className="text-red-600 text-center py-4">{error}</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t('orders.history')}</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">{t('orders.noOrders')}</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow">
              {/* Order details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory; 