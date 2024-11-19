import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function HomePage() {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('welcome.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('welcome.description')}
          </p>
          
          {!user ? (
            <div className="space-x-4">
              <Link
                to="/login"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                {t('login')}
              </Link>
              <Link
                to="/register"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                {t('register')}
              </Link>
            </div>
          ) : (
            <Link
              to="/dashboard"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              {t('goToDashboard')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage; 