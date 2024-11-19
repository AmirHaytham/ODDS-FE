import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../components/common/Breadcrumbs';

function Promotions() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    promoCode: '',
    discountPercentage: '',
    expiryDate: '',
    description: '',
    minPurchaseAmount: '',
    maxDiscountAmount: '',
    usageLimit: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('admin.promotions.title')}</h1>
          <p className="mt-2 text-gray-600">{t('admin.promotions.description')}</p>
        </div>
        <button
          onClick={() => setFormData({})}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('admin.promotions.addNew')}
        </button>
      </div>

      {/* Add New Promotion Form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-6">{t('admin.promotions.addNewPromotion')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Promo Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('admin.promotions.promoCode')}
              </label>
              <input
                type="text"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Discount Percentage */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('admin.promotions.discountPercentage')}
              </label>
              <input
                type="number"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('admin.promotions.expiryDate')}
              </label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Usage Limit */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('admin.promotions.usageLimit')}
              </label>
              <input
                type="number"
                name="usageLimit"
                value={formData.usageLimit}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Min Purchase Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('admin.promotions.minPurchaseAmount')}
              </label>
              <input
                type="number"
                name="minPurchaseAmount"
                value={formData.minPurchaseAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Max Discount Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('admin.promotions.maxDiscountAmount')}
              </label>
              <input
                type="number"
                name="maxDiscountAmount"
                value={formData.maxDiscountAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('admin.promotions.description')}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('admin.promotions.addPromotion')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Promotions; 