import { createContext, useContext, useState, useEffect } from 'react';
import { testAccounts } from '../data/testAccounts';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize user data from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
      
      if (storedUser && storedToken) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Error loading stored user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Mock login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find matching test account
      const account = Object.values(testAccounts).find(
        acc => acc.email === email && acc.password === password
      );

      if (!account) {
        throw new Error('Invalid credentials');
      }

      // Simulate successful login
      const userData = {
        ...account,
        token: 'mock-jwt-token-' + account.role
      };

      setCurrentUser(userData);
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify(userData));

      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Mock register function
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if email already exists
      const emailExists = Object.values(testAccounts).some(
        acc => acc.email === email
      );

      if (emailExists) {
        throw new Error('Email already exists');
      }

      // Create new user
      const newUser = {
        email,
        password,
        name,
        role: 'user'
      };

      // Simulate successful registration
      const userData = {
        ...newUser,
        token: 'mock-jwt-token-user'
      };

      setCurrentUser(userData);
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify(userData));

      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
    error
  };

  // Show loading state while checking for stored user
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}