import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

function Checkout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handlePromoCode = async () => {
    try {
      const response = await api.post('/orders/apply-promo', { code: promoCode });
      setDiscount(response.data.discount);
    } catch (err) {
      setError(t('invalidPromoCode'));
    }
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      await api.post('/orders/checkout', {
        promoCode,
        // Add other checkout data
      });
      navigate('/orders');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">{t('checkout')}</h1>

      {error && <ErrorMessage message={error} />}

      <div className="bg-white shadow rounded-lg p-6">
        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">{t('orderSummary')}</h2>
          {/* Add order items here */}
        </div>

        {/* Promo Code */}
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={t('enterPromoCode')}
              className="flex-1 border rounded p-2"
            />
            <button
              onClick={handlePromoCode}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {t('apply')}
            </button>
          </div>
          {discount > 0 && (
            <p className="text-green-600 mt-2">
              {t('discountApplied', { amount: discount })}
            </p>
          )}
        </div>

        {/* Payment Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">{t('payment')}</h2>
          {/* Add payment form here */}
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {t('placeOrder')}
        </button>
      </div>
    </div>
  );
}

export default Checkout; 