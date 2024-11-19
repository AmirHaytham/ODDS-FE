import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { mockDashboardData } from '../../services/mockData';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import StatsCard from '../../components/dashboard/StatsCard';
import Breadcrumbs from '../../components/common/Breadcrumbs';

function AdminDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDashboardData(mockDashboardData.admin);
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

  const handleNavigateToDrivers = () => navigate('/admin/drivers');
  const handleNavigateToOrders = () => navigate('/admin/orders');
  const handleNavigateToPromotions = () => navigate('/admin/promotions');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('admin.dashboard.title')}</h1>
        <p className="mt-2 text-gray-600">{t('admin.dashboard.description')}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title={t('admin.dashboard.totalOrders')}
          value={dashboardData.totalOrders}
          color="blue"
        />
        <StatsCard
          title={t('admin.dashboard.pendingOrders')}
          value={dashboardData.pendingOrders}
          color="yellow"
        />
        <StatsCard
          title={t('admin.dashboard.totalRevenue')}
          value={dashboardData.totalRevenue}
          color="green"
        />
        <StatsCard
          title={t('admin.dashboard.activeDrivers')}
          value={dashboardData.activeDrivers}
          color="purple"
        />
      </div>

      {/* Driver Stats */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">{t('admin.dashboard.driverStats')}</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-semibold text-green-600">{dashboardData.driverStats.online}</div>
            <div className="text-sm text-gray-600">{t('admin.dashboard.driversOnline')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-yellow-600">{dashboardData.driverStats.busy}</div>
            <div className="text-sm text-gray-600">{t('admin.dashboard.driversBusy')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-600">{dashboardData.driverStats.offline}</div>
            <div className="text-sm text-gray-600">{t('admin.dashboard.driversOffline')}</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button 
          onClick={handleNavigateToDrivers}
          className="p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors"
        >
          {t('admin.dashboard.actions.manageDrivers')}
        </button>
        <button 
          onClick={handleNavigateToOrders}
          className="p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors"
        >
          {t('admin.dashboard.actions.manageOrders')}
        </button>
        <button 
          onClick={handleNavigateToPromotions}
          className="p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors"
        >
          {t('admin.dashboard.actions.managePromotions')}
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;