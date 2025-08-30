# AirSense - Air Quality Monitoring App

AirSense is a React Native mobile application for monitoring air quality and providing health recommendations based on current air pollution levels.

## Features

- **Real-time AQI Display**: View current Air Quality Index with color-coded status
- **Health Recommendations**: Get personalized advice based on your health conditions
- **Historical Data**: Track air quality trends over time with interactive charts
- **Health Notifications**: Receive alerts when air quality may affect your health
- **Profile Management**: Manage your health conditions and personal information
- **Multiple Screen Support**: Login, Signup, Home, Health, Notifications, History, and Profile screens

## Demo Credentials

For testing purposes, use these credentials:
- **Email**: `user@airsense.com`
- **Password**: `password123`

## Tech Stack

- React Native
- React Navigation
- React Native Vector Icons
- React Native Chart Kit
- React Native SVG

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ramil25/airsense.git
cd airsense
```

2. Install dependencies:
```bash
npm install
```

3. Start the Metro bundler:
```bash
npm start
```

4. Run on Android:
```bash
npm run android
```

5. Run on iOS:
```bash
npm run ios
```

## Project Structure

```
src/
├── screens/          # All screen components
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── HomeScreen.js
│   ├── HealthScreen.js
│   ├── NotificationScreen.js
│   ├── HistoryScreen.js
│   └── ProfileScreen.js
├── components/       # Reusable components
├── navigation/       # Navigation configuration
├── utils/           # Utility functions
└── assets/          # Images, fonts, etc.
```

## Screens Overview

### Login Screen
- AirSense branded login interface
- Demo credentials provided for testing
- Navigation to signup screen

### Signup Screen
- Complete registration form with health condition selection
- Form validation
- Health condition dropdown with multiple options

### Home Screen
- Current AQI display with color-coded status
- Navigation menu with hamburger icon
- Health advisory based on current air quality
- Quick action buttons
- AQI scale reference

### Health Screen
- Health condition checklist
- Personalized recommendations
- Information about why health data is needed

### Notifications Screen
- Health alerts and air quality notifications
- Color-coded notification cards based on severity
- Action buttons for each notification

### History Screen
- Interactive charts showing AQI trends
- Multiple time period views (7 days, 30 days, 6 months)
- Statistical summaries
- Detailed data table

### Profile Screen
- User profile management
- Settings and preferences
- App information
- Logout functionality

## Design

The app follows the Figma design specifications with:
- Clean, modern interface
- Teal/turquoise color scheme (#2DD4BF)
- Consistent typography and spacing
- Accessible color contrasts
- Intuitive navigation patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Contact

For support or questions, contact: support@airsense.com