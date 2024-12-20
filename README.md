# 🚚 On Demand Delivery Service
[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18next-21.8-green.svg)](https://www.i18next.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/AmirHaytham/ODDS-FE/graphs/commit-activity)
[![GitHub issues](https://img.shields.io/github/issues/AmirHaytham/ODDS-FE)](https://github.com/AmirHaytham/ODDS-FE/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/AmirHaytham/ODDS-FE)](https://github.com/AmirHaytham/ODDS-FE/pulls)
[![Build Status](https://img.shields.io/github/workflow/status/AmirHaytham/ODDS-FE/CI)](https://github.com/AmirHaytham/ODDS-FE/tree/master/.github/workflows)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

A comprehensive delivery management solution designed to streamline logistics operations and enhance customer experience. This platform connects businesses, drivers, and customers in a seamless ecosystem for efficient delivery services.

## 📸 Screenshots

### Homepage
![Homepage](https://github.com/AmirHaytham/ODDS-FE/blob/master/screenshots/Screenshot%20(76).png)
- Real-time statistics and driver monitoring
- Quick access to key management features

### Admin Dashboard
![Admin Dashboard](https://github.com/AmirHaytham/ODDS-FE/blob/master/screenshots/Screenshot%20(82).png)
- Real-time statistics and driver monitoring
- Quick access to key management features

### Driver Portal
![Driver App](https://github.com/AmirHaytham/ODDS-FE/blob/master/screenshots/Screenshot%20(87).png)
- Active delivery tracking
- Earnings overview and status controls

### Driver Dashboard
![User App](https://github.com/AmirHaytham/ODDS-FE/blob/master/screenshots/Screenshot%20(86).png)
- Tracking derveries and earnings and payments

### Multi-language Support
![RTL Support](https://github.com/AmirHaytham/ODDS-FE/blob/master/screenshots/Screenshot%20(77).png)
- Arabic interface with RTL support
- Seamless language switching
  
## 💼 Business Overview

### For Businesses
- Reduce operational costs through efficient route optimization
- Real-time tracking and analytics for better decision making
- Automated dispatch system to minimize manual intervention
- Customizable promotion system to drive customer engagement
- Comprehensive reporting for business insights
- Driver performance monitoring and management

### For Drivers
- Flexible working hours with easy status management
- Clear earnings visibility and performance metrics
- Optimized route suggestions for efficient deliveries
- Built-in navigation and delivery instructions
- Simple order acceptance and completion workflow
- Performance-based incentive tracking

### For Customers
- Real-time order tracking and status updates
- Multiple payment options for convenience
- Delivery time estimates based on real-time conditions
- Order history and reordering capabilities
- Rating and feedback system
- Special offers and promotional discounts


## 🚀 Features

### Authentication & Authorization
- Multi-role authentication (Admin, Driver, User)
- Protected routes based on user roles
- Mock authentication system for development
- Persistent login state using localStorage
- Role-based redirections
- Registration with validation

### Admin Features
- Comprehensive admin dashboard
- Real-time statistics overview
- Driver management system
- Promotion code management
- Driver status monitoring (Online/Busy/Offline)
- Quick action navigation

### Driver Features
- Driver-specific dashboard
- Online/Offline status toggle
- Current delivery tracking
- Earnings overview
- Delivery history
- Navigation integration
- Rating system display

### User Features
- User dashboard
- Order tracking
- Order history
- Profile management
- Real-time order status

### Internationalization
- Dual language support (English & Arabic)
- RTL/LTR layout support
- Language persistence
- Dynamic content translation
- Number and currency formatting

### UI/UX Features
- Responsive design with Tailwind CSS
- Loading states and spinners
- Error handling and messages
- Form validation
- Breadcrumb navigation
- Card-based layouts
- Status indicators
- Interactive buttons
- Clean and modern design

## 🛠 Tech Stack

### Core
- React 18
- React Router v6 (with protected routes)
- Tailwind CSS for styling
- i18next for internationalization

### State Management
- React Context API for:
  - Authentication state
  - User preferences
  - Language settings
- localStorage for persistence
- Custom hooks for shared logic

### Development Tools
- Create React App
- ESLint
- Prettier
- React Developer Tools


## 📂 Project Structure
```
delivery-platform-frontend/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── buttons/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── IconButton.jsx
│   │   │   │   └── ToggleButton.jsx
│   │   │   ├── forms/
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Select.jsx
│   │   │   │   └── Checkbox.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Container.jsx
│   │   │   │   └── Grid.jsx
│   │   │   └── ui/
│   │   │       ├── Badge.jsx
│   │   │       ├── Spinner.jsx
│   │   │       └── Alert.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   │   ├── StatisticsCard.jsx
│   │   │   │   ├── DriversList.jsx
│   │   │   │   └── RevenueChart.jsx
│   │   │   └── management/
│   │   │       ├── DriverManagement.jsx
│   │   │       └── PromoCodeManager.jsx
│   │   │
│   │   ├── driver/
│   │   │   ├── dashboard/
│   │   │   │   ├── DeliveryMap.jsx
│   │   │   │   ├── EarningsCard.jsx
│   │   │   │   └── StatusToggle.jsx
│   │   │   └── delivery/
│   │   │       ├── DeliveryDetails.jsx
│   │   │       └── NavigationCard.jsx
│   │   │
│   │   └── user/
│   │       ├── orders/
│   │       │   ├── OrderCard.jsx
│   │       │   ├── OrderHistory.jsx
│   │       │   └── TrackingMap.jsx
│   │       └── profile/
│   │           ├── ProfileCard.jsx
│   │           └── AddressBook.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── data/
│   │   └── testAccounts.js
│   │
│   ├── locales/
│   │   ├── en.json
│   │   └── ar.json
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DriversManagement/
│   │   │   │   ├── DriversList.jsx
│   │   │   │   ├── DriverDetails.jsx
│   │   │   │   └── AddDriver.jsx
│   │   │   ├── Orders/
│   │   │   │   ├── OrdersList.jsx
│   │   │   │   └── OrderDetails.jsx
│   │   │   ├── Promotions/
│   │   │   │   ├── PromotionsList.jsx
│   │   │   │   ├── CreatePromotion.jsx
│   │   │   │   └── EditPromotion.jsx
│   │   │   ├── Settings/
│   │   │   │   ├── GeneralSettings.jsx
│   │   │   │   ├── SecuritySettings.jsx
│   │   │   │   └── NotificationSettings.jsx
│   │   │   └── Reports/
│   │   │       ├── FinancialReports.jsx
│   │   │       ├── DriverReports.jsx
│   │   │       └── OrderReports.jsx
│   │   │
│   │   ├── driver/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ActiveDelivery.jsx
│   │   │   ├── DeliveryHistory.jsx
│   │   │   ├── Earnings/
│   │   │   │   ├── EarningsSummary.jsx
│   │   │   │   └── PaymentHistory.jsx
│   │   │   ├── Profile/
│   │   │   │   ├── PersonalInfo.jsx
│   │   │   │   ├── VehicleInfo.jsx
│   │   │   │   └── Documents.jsx
│   │   │   └── Settings/
│   │   │       ├── AccountSettings.jsx
│   │   │       └── PreferenceSettings.jsx
│   │   │
│   │   ├── user/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── Orders/
│   │   │   │   ├── PlaceOrder.jsx
│   │   │   │   ├── OrderTracking.jsx
│   │   │   │   ├── OrderHistory.jsx
│   │   │   │   └── OrderDetails.jsx
│   │   │   ├── Profile/
│   │   │   │   ├── PersonalInfo.jsx
│   │   │   │   ├── AddressBook.jsx
│   │   │   │   └── PaymentMethods.jsx
│   │   │   └── Settings/
│   │   │       ├── AccountSettings.jsx
│   │   │       ├── NotificationPreferences.jsx
│   │   │       └── SecuritySettings.jsx
│   │   │
│   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ResetPassword.jsx
│   │   │
│   │   └── common/
│   │       ├── NotFound.jsx
│   │       ├── ServerError.jsx
│   │       └── Maintenance.jsx
│   │
│   ├── App.css
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── README.md
├── tailwind.config.js
└── webpack.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AmirHaytham/ODDS-FE.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## 📝 Environment Variables

```env
REACT_APP_API_URL=your_api_url
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_key
```

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 🏗 Building for Production

```bash
npm run build
# or
yarn build
```
## 🧪 Test Accounts

Use these credentials to test different user roles:

### Admin Account
```
Email: admin@odds.com
Password: admin123
```

### Driver Account
```
Email: driver@odds.com
Password: driver123
```

### User Account
```
Email: user@odds.com
Password: user123
```

Note: These accounts are for testing purposes only. In production, please use secure credentials.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
