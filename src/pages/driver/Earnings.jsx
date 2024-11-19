import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

function Earnings() {
  const { t } = useTranslation();
  const [earnings, setEarnings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock data loading
    const fetchEarnings = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEarnings({
          total: "$850.00",
          today: "$120.00",
          thisWeek: "$450.00",
          thisMonth: "$850.00"
        });
      } catch (err) {
        setError(t('common.error'));
      } finally {
        setLoading(false);
      }
    };

    fetchEarnings();
  }, [t]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('driver.earnings.title')}</h1>
        <p className="mt-2 text-gray-600">{t('driver.earnings.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">{t('driver.earnings.today')}</h3>
          <p className="mt-2 text-3xl font-semibold text-green-600">{earnings?.today}</p>
        </div>
        {/* Add more earnings stats */}
      </div>
    </div>
  );
}

export default Earnings; 