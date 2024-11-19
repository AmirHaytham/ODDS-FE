import { useTranslation } from 'react-i18next';

function OrderCard({ order }) {
  const { t } = useTranslation();

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {t('common.orderNumber', { id: order.id })}
          </h3>
          <p className="text-sm text-gray-500">{order.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
          {t(`orderStatus.${order.status}`)}
        </span>
      </div>
      
      {order.items && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">{t('order.items')}</h4>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          {order.customerName && (
            <p>{t('order.customer')}: {order.customerName}</p>
          )}
          {order.address && (
            <p>{t('order.address')}: {order.address}</p>
          )}
        </div>
        <div className="text-lg font-semibold text-gray-900">
          {order.total}
        </div>
      </div>
    </div>
  );
}

export default OrderCard; 