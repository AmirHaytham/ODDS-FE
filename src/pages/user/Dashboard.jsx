import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockDashboardData } from '../../services/mockData';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

function Dashboard() {
  const { t } = useTranslation();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDashboardData(mockDashboardData.user);
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.title')}</h1>
        <p className="mt-2 text-gray-600">{t('dashboard.description')}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">{t('dashboard.totalOrders')}</h3>
          <p className="mt-2 text-3xl font-semibold text-blue-600">{dashboardData.totalOrders}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">{t('dashboard.pendingOrders')}</h3>
          <p className="mt-2 text-3xl font-semibold text-yellow-600">{dashboardData.pendingOrders}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">{t('dashboard.totalSpent')}</h3>
          <p className="mt-2 text-3xl font-semibold text-green-600">{dashboardData.totalSpent}</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">{t('dashboard.recentOrders')}</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {dashboardData.recentOrders.length === 0 ? (
            <div className="px-6 py-4 text-gray-500">{t('dashboard.noOrders')}</div>
          ) : (
            dashboardData.recentOrders.map((order) => (
              <div key={order.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    {t('common.orderNumber', { id: order.id })}
                  </p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${order.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                    ${order.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {t(`orderStatus.${order.status}`)}
                  </span>
                  <span className="font-medium text-gray-900">{order.total}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 