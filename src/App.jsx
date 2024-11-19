import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PrivateRoute from './components/common/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import LanguageSwitcher from './components/common/LanguageSwitcher';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// Import Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Import User Pages
import UserDashboard from './pages/user/Dashboard';
import Checkout from './pages/user/Checkout';
import OrderHistory from './pages/user/OrderHistory';
import UserLayout from './pages/user/UserLayout';
import ProfileCard from './pages/user/ProfileCard';

// Import Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Drivers from './pages/admin/Drivers';
import Promotions from './pages/admin/Promotions';
import AdminLayout from './pages/admin/AdminLayout';

// Import Driver Pages
import DriverDashboard from './pages/driver/Dashboard';
import DriverLayout from './pages/driver/DriverLayout';
import Deliveries from './pages/driver/Deliveries';
import Earnings from './pages/driver/Earnings';

function App() {
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading translations...</div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <div className="fixed top-4 right-4 z-50">
            <LanguageSwitcher />
          </div>
          <Navbar />
          <Suspense 
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Loading...</div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Protected User Routes */}
              <Route element={<PrivateRoute role="user" />}>
                <Route path="/user" element={<UserLayout />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/profile" element={<ProfileCard />} />
              </Route>

              {/* Protected Admin Routes */}
              <Route element={<PrivateRoute role="admin" />}>
                <Route path="/admin" element={<AdminLayout />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/drivers" element={<Drivers />} />
                <Route path="/admin/promotions" element={<Promotions />} />
              </Route>

              {/* Protected Driver Routes */}
              <Route element={<PrivateRoute role="driver" />}>
                <Route path="/driver" element={<DriverLayout />} />
                <Route path="/driver/dashboard" element={<DriverDashboard />} />
                <Route path="/driver/deliveries" element={<Deliveries />} />
                <Route path="/driver/earnings" element={<Earnings />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 