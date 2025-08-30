import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = ({ navigation }) => {
  const notifications = [
    {
      id: 1,
      type: 'health',
      title: 'Health Notification',
      message: 'Air Quality Alert: High PM2.5 Detected',
      details: 'The PM2.5 particles concentration is extremely high. Avoid going outside if you have underlying respiratory illness. Stay indoors and keep windows closed.',
      time: '2 hours ago',
      severity: 'high',
      backgroundColor: '#FEF2F2',
      borderColor: '#EF4444',
      textColor: '#B91C1C',
    },
    {
      id: 2,
      type: 'advisory',
      title: 'Air Quality Advisory',
      message: 'Moderate Air Quality Detected',
      details: 'Air quality is acceptable for most people. However, sensitive individuals may experience minor to moderate symptoms from long-term exposure.',
      time: '5 hours ago',
      severity: 'medium',
      backgroundColor: '#FFFBEB',
      borderColor: '#F59E0B',
      textColor: '#D97706',
    },
    {
      id: 3,
      type: 'info',
      title: 'Daily Reminder',
      message: 'Check Your Daily Air Quality',
      details: 'Remember to check today\'s air quality before planning outdoor activities. Your health is our priority.',
      time: '1 day ago',
      severity: 'low',
      backgroundColor: '#F0FDF4',
      borderColor: '#10B981',
      textColor: '#059669',
    },
  ];

  const NotificationCard = ({ notification }) => (
    <View style={[
      styles.notificationCard,
      { 
        backgroundColor: notification.backgroundColor,
        borderLeftColor: notification.borderColor,
      }
    ]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.notificationTitle, { color: notification.textColor }]}>
          {notification.title}
        </Text>
        <Text style={styles.timeText}>{notification.time}</Text>
      </View>
      
      <Text style={[styles.notificationMessage, { color: notification.textColor }]}>
        {notification.message}
      </Text>
      
      <Text style={styles.notificationDetails}>
        {notification.details}
      </Text>
      
      <View style={styles.cardActions}>
        <TouchableOpacity style={[styles.actionButton, { borderColor: notification.borderColor }]}>
          <Text style={[styles.actionButtonText, { color: notification.textColor }]}>
            View Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.clearAllButton}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No notifications</Text>
            <Text style={styles.emptySubtext}>
              You're all caught up! New notifications will appear here.
            </Text>
          </View>
        )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  clearAllButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  clearAllText: {
    fontSize: 14,
    color: '#2DD4BF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationCard: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  timeText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 10,
  },
  notificationMessage: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  notificationDetails: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
    marginBottom: 12,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 0.48,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  dismissButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 0.48,
  },
  dismissButtonText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CA3AF',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});

export default NotificationScreen;