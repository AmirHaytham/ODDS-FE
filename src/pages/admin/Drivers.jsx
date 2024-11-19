import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../components/common/Breadcrumbs';

function Drivers() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('admin.drivers.title')}</h1>
        <p className="mt-2 text-gray-600">{t('admin.drivers.description')}</p>
      </div>
      
      {/* Add your drivers management content here */}
      <div className="bg-white rounded-lg shadow p-6">
        <p>Drivers management content will go here</p>
      </div>
    </div>
  );
}

export default Drivers; 