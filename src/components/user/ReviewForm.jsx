import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StarIcon } from '@heroicons/react/solid';
import api from '../../services/api';
import Toast from '../common/Toast';

function ReviewForm({ orderId, onReviewSubmitted }) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      showToast(t('pleaseSelectRating'), 'error');
      return;
    }

    try {
      setLoading(true);
      await api.post(`/orders/${orderId}/review`, {
        rating,
        comment
      });
      
      showToast(t('reviewSubmitted'));
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
      
      // Reset form
      setRating(0);
      setComment('');
    } catch (err) {
      showToast(t('reviewError'), 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      
      <h2 className="text-2xl font-bold mb-4">{t('rateYourOrder')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating Stars */}
        <div className="flex items-center space-x-2">
          <p className="mr-4">{t('rating')}:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleStarClick(star)}
              className="focus:outline-none"
            >
              <StarIcon
                className={`h-8 w-8 ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Comment Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('comments')}
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={t('commentPlaceholder')}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? t('submitting') : t('submitReview')}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm; 