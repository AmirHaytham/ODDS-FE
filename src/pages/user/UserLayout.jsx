import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/common/Breadcrumbs';

function UserLayout() {
  const { t } = useTranslation();

  const userMenuItems = [
    {
      title: t('dashboard.title'),
      description: t('dashboard.description'),
      link: '/dashboard',
      icon: '📊'
    },
    {
      title: t('orders.title'),
      description: t('orders.description'),
      link: '/orders',
      icon: '📦'
    },
    {
      title: t('profile.title'),
      description: t('profile.description'),
      link: '/profile',
      icon: '👤'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('user.title')}</h1>
        <p className="mt-2 text-gray-600">{t('user.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userMenuItems.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserLayout; 