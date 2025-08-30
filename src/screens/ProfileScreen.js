import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation }) => {
  const userProfile = {
    name: 'Juan Dela Cruz',
    birthDate: 'March 25, 1996',
    contact: '0945 138 8996',
    email: 'juandelacruz@gmail.com',
    password: '**********',
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => navigation.navigate('Login') },
      ]
    );
  };

  const ProfileItem = ({ icon, label, value, onPress, showArrow = true }) => (
    <TouchableOpacity style={styles.profileItem} onPress={onPress}>
      <View style={styles.profileItemLeft}>
        <Text style={styles.profileIcon}>{icon}</Text>
        <Text style={styles.profileLabel}>{label}</Text>
      </View>
      <View style={styles.profileItemRight}>
        <Text style={styles.profileValue}>{value}</Text>
        {showArrow && <Text style={styles.profileArrow}>✏️</Text>}
      </View>
    </TouchableOpacity>
  );

  const MenuSection = ({ title, children }) => (
    <View style={styles.menuSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const MenuItem = ({ icon, label, onPress, showArrow = true }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      {showArrow && <Text style={styles.menuArrow}>▶</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.profileTitle}>Profile</Text>
        </View>

        {/* Profile Information */}
        <View style={styles.profileSection}>
          <ProfileItem
            icon="👤"
            label="Name"
            value={userProfile.name}
            onPress={() => Alert.alert('Edit Name', 'Feature coming soon!')}
          />
          
          <ProfileItem
            icon="📅"
            label="Birth Date"
            value={userProfile.birthDate}
            onPress={() => Alert.alert('Edit Birth Date', 'Feature coming soon!')}
          />
          
          <ProfileItem
            icon="📞"
            label="Contact"
            value={userProfile.contact}
            onPress={() => Alert.alert('Edit Contact', 'Feature coming soon!')}
          />
          
          <ProfileItem
            icon="📧"
            label="Email"
            value={userProfile.email}
            onPress={() => Alert.alert('Edit Email', 'Feature coming soon!')}
          />
          
          <ProfileItem
            icon="🔒"
            label="Password"
            value={userProfile.password}
            onPress={() => Alert.alert('Change Password', 'Feature coming soon!')}
          />
        </View>

        {/* Settings Menu */}
        <MenuSection title="Settings">
          <MenuItem
            icon="🔔"
            label="Notification"
            onPress={() => navigation.navigate('Notification')}
          />
          
          <MenuItem
            icon="🎨"
            label="Appearance"
            onPress={() => Alert.alert('Appearance', 'Feature coming soon!')}
          />
          
          <MenuItem
            icon="❓"
            label="Help and Support"
            onPress={() => Alert.alert('Help & Support', 'Contact us at support@airsense.com')}
          />
          
          <MenuItem
            icon="ℹ️"
            label="About"
            onPress={() => Alert.alert('About AirSense', 'Version 1.0.0\nAir Quality Monitoring App')}
          />
        </MenuSection>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>AirSense v1.0.0</Text>
          <Text style={styles.appInfoText}>© 2024 AirSense. All rights reserved.</Text>
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
  content: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#F9FAFB',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2DD4BF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  profileItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  profileLabel: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  profileItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileValue: {
    fontSize: 14,
    color: '#6B7280',
    marginRight: 10,
  },
  profileArrow: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F9FAFB',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333333',
  },
  menuArrow: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appInfo: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  appInfoText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
  },
});

export default ProfileScreen;