import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18n from './i18n';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

// Wait for i18n to be initialized
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
};

// Check if i18n is initialized
if (!i18n.isInitialized) {
  i18n.on('initialized', () => {
    renderApp();
  });
} else {
  renderApp();
}