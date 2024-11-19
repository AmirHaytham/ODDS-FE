import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            {t('appName')}
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {t('welcome.description')}
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              {t('auth.login')}
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              {t('auth.register')}
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4">
              {/* You can add an icon here */}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('welcome.feature1.title')}
            </h2>
            <p className="text-gray-600">
              {t('welcome.feature1.description')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4">
              {/* You can add an icon here */}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('welcome.feature2.title')}
            </h2>
            <p className="text-gray-600">
              {t('welcome.feature2.description')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4">
              {/* You can add an icon here */}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('welcome.feature3.title')}
            </h2>
            <p className="text-gray-600">
              {t('welcome.feature3.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 