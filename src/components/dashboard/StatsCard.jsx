function StatsCard({ title, value, icon, color = 'blue' }) {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
    red: 'text-red-600'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {icon && <span className={`text-2xl ${colorClasses[color]}`}>{icon}</span>}
      </div>
      <p className={`text-3xl font-semibold ${colorClasses[color]}`}>{value}</p>
    </div>
  );
}

export default StatsCard; 