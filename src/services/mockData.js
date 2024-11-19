export const mockDashboardData = {
  user: {
    totalOrders: 25,
    pendingOrders: 3,
    totalSpent: "$520.00",
    recentOrders: [
      {
        id: "ORD-001",
        status: 'pending',
        total: '$45.00',
        date: '2024-01-19'
      },
      {
        id: "ORD-002",
        status: 'completed',
        total: '$32.50',
        date: '2024-01-18'
      },
      {
        id: "ORD-003",
        status: 'cancelled',
        total: '$28.75',
        date: '2024-01-17'
      },
      {
        id: "ORD-004",
        status: 'completed',
        total: '$55.25',
        date: '2024-01-16'
      },
      {
        id: "ORD-005",
        status: 'completed',
        total: '$41.00',
        date: '2024-01-15'
      }
    ]
  },
  admin: {
    totalOrders: 150,
    pendingOrders: 12,
    totalRevenue: "$5,200.00",
    activeDrivers: 8,
    recentOrders: [
      // Similar structure to user orders but with more details
    ],
    driverStats: {
      online: 8,
      busy: 5,
      offline: 3
    }
  },
  driver: {
    completedDeliveries: 45,
    rating: 4.8,
    earnings: "$850.00",
    todaysOrders: 8,
    currentOrder: {
      id: "ORD-125",
      status: "in-progress",
      pickup: "Restaurant A",
      dropoff: "123 Main St",
      customerName: "John Doe"
    },
    recentDeliveries: [
      // List of recent deliveries
    ]
  }
};

export const mockOrderStatuses = {
  pending: 'pending',
  inProgress: 'in-progress',
  completed: 'completed',
  cancelled: 'cancelled'
}; 