import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

function Deliveries() {
  const { t } = useTranslation();
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock data loading
    const fetchDeliveries = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDeliveries([]);
      } catch (err) {
        setError(t('common.error'));
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveries();
  }, [t]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('driver.deliveries.title')}</h1>
        <p className="mt-2 text-gray-600">{t('driver.deliveries.description')}</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Add deliveries list here */}
      </div>
    </div>
  );
}

export default Deliveries; 