import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockDashboardData } from '../../services/mockData';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import StatsCard from '../../components/dashboard/StatsCard';
import Breadcrumbs from '../../components/common/Breadcrumbs';

function DriverDashboard() {
  const { t } = useTranslation();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDashboardData(mockDashboardData.driver);
      } catch (err) {
        setError(t('common.error'));
        console.error('Dashboard data fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [t]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!dashboardData) return <ErrorMessage message={t('common.error')} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('driver.dashboard.title')}</h1>
          <p className="mt-2 text-gray-600">{t('driver.dashboard.description')}</p>
        </div>
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`px-6 py-2 rounded-lg font-medium ${
            isOnline 
              ? 'bg-green-100 text-green-800 hover:bg-green-200' 
              : 'bg-red-100 text-red-800 hover:bg-red-200'
          }`}
        >
          {isOnline ? t('driver.status.online') : t('driver.status.offline')}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title={t('driver.dashboard.completedDeliveries')}
          value={dashboardData.completedDeliveries}
          color="blue"
        />
        <StatsCard
          title={t('driver.dashboard.rating')}
          value={`${dashboardData.rating} ⭐`}
          color="yellow"
        />
        <StatsCard
          title={t('driver.dashboard.earnings')}
          value={dashboardData.earnings}
          color="green"
        />
      </div>

      {/* Current Order */}
      {dashboardData.currentOrder && (
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900">{t('driver.dashboard.currentOrder')}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">{t('driver.order.pickup')}</p>
                <p className="font-medium">{dashboardData.currentOrder.pickup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('driver.order.dropoff')}</p>
                <p className="font-medium">{dashboardData.currentOrder.dropoff}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('driver.order.customer')}</p>
                <p className="font-medium">{dashboardData.currentOrder.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('driver.order.status')}</p>
                <p className="font-medium">{t(`orderStatus.${dashboardData.currentOrder.status}`)}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                {t('driver.actions.navigate')}
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                {t('driver.actions.complete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverDashboard; 