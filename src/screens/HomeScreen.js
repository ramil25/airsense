import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const currentAQI = {
    value: 50,
    status: 'Good',
    color: '#10B981',
    date: 'APRIL 22, 2024',
    time: '7:48:24PM',
  };

  const MenuItem = ({ title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuItemText}>📍 {title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(!menuVisible)}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>🌊</Text>
          <Text style={styles.appName}>AirSense</Text>
        </View>
      </View>

      {/* Side Menu */}
      {menuVisible && (
        <View style={styles.sideMenu}>
          <MenuItem title="Home" onPress={() => setMenuVisible(false)} />
          <MenuItem 
            title="Notification" 
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Notification');
            }} 
          />
          <MenuItem 
            title="History" 
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('History');
            }} 
          />
          <MenuItem 
            title="Settings" 
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Health');
            }} 
          />
          <MenuItem 
            title="Profile" 
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Profile');
            }} 
          />
        </View>
      )}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Current Date and Time */}
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateText}>{currentAQI.date}</Text>
          <Text style={styles.timeText}>{currentAQI.time}</Text>
        </View>

        {/* AQI Display */}
        <View style={styles.aqiContainer}>
          <View style={[styles.aqiCircle, { backgroundColor: currentAQI.color }]}>
            <Text style={styles.aqiValue}>AQI</Text>
            <Text style={styles.aqiNumber}>{currentAQI.value}</Text>
            <Text style={styles.aqiStatus}>{currentAQI.status}</Text>
          </View>
        </View>

        {/* Health Advisory */}
        <View style={styles.advisoryContainer}>
          <Text style={styles.advisoryTitle}>Health Advisory</Text>
          <Text style={styles.advisoryText}>
            Air quality is Good. Continue regular activities without concerns for air quality.
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Health')}
          >
            <Text style={styles.actionButtonText}>Health Check</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('History')}
          >
            <Text style={styles.actionButtonText}>View History</Text>
          </TouchableOpacity>
        </View>

        {/* AQI Scale Info */}
        <View style={styles.scaleContainer}>
          <Text style={styles.scaleTitle}>AQI Scale</Text>
          <View style={styles.scaleItem}>
            <View style={[styles.scaleColor, { backgroundColor: '#10B981' }]} />
            <Text style={styles.scaleText}>0-50 Good</Text>
          </View>
          <View style={styles.scaleItem}>
            <View style={[styles.scaleColor, { backgroundColor: '#F59E0B' }]} />
            <Text style={styles.scaleText}>51-100 Moderate</Text>
          </View>
          <View style={styles.scaleItem}>
            <View style={[styles.scaleColor, { backgroundColor: '#F97316' }]} />
            <Text style={styles.scaleText}>101-150 Unhealthy for Sensitive</Text>
          </View>
          <View style={styles.scaleItem}>
            <View style={[styles.scaleColor, { backgroundColor: '#EF4444' }]} />
            <Text style={styles.scaleText}>151-200 Unhealthy</Text>
          </View>
          <View style={styles.scaleItem}>
            <View style={[styles.scaleColor, { backgroundColor: '#8B5CF6' }]} />
            <Text style={styles.scaleText}>201-300 Very Unhealthy</Text>
          </View>
          <View style={styles.scaleItem}>
            <View style={[styles.scaleColor, { backgroundColor: '#7C2D12' }]} />
            <Text style={styles.scaleText}>301+ Hazardous</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2DD4BF',
  },
  menuButton: {
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    marginRight: 8,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sideMenu: {
    position: 'absolute',
    top: 70,
    left: 0,
    backgroundColor: '#000000',
    width: 200,
    zIndex: 1000,
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dateTimeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  aqiContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  aqiCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aqiValue: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  aqiNumber: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  aqiStatus: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  advisoryContainer: {
    backgroundColor: '#F0FDF4',
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
  },
  advisoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 10,
  },
  advisoryText: {
    fontSize: 14,
    color: '#047857',
    lineHeight: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#2DD4BF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.48,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scaleContainer: {
    backgroundColor: '#F9FAFB',
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
  },
  scaleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  scaleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  scaleColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  scaleText: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default HomeScreen;