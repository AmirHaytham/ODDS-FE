import { useEffect } from 'react';

function Toast({ message, type = 'success' }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.style.opacity = '0';
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      id="toast"
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-500`}
      style={{ opacity: 1 }}
    >
      {message}
    </div>
  );
}

export default Toast; 