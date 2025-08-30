import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HealthScreen = ({ navigation }) => {
  const [selectedConditions, setSelectedConditions] = useState([]);

  const healthConditions = [
    { id: 1, name: 'Asthma', checked: false },
    { id: 2, name: 'Allergic Rhinitis (Hay Fever)', checked: false },
    { id: 3, name: 'Bronchitis/Cough/Phlegm', checked: false },
    { id: 4, name: 'COPD/Emphysema', checked: false },
    { id: 5, name: 'Pneumonia', checked: false },
    { id: 6, name: 'Lung Cancer', checked: false },
    { id: 7, name: 'Cystic Fibrosis/Obstructive Pulmonary Disease', checked: false },
    { id: 8, name: 'Stroke', checked: false },
    { id: 9, name: 'Cardiovascular Disease', checked: false },
    { id: 10, name: 'General', checked: false },
  ];

  const [conditions, setConditions] = useState(healthConditions);

  const toggleCondition = (id) => {
    setConditions(prev =>
      prev.map(condition =>
        condition.id === id
          ? { ...condition, checked: !condition.checked }
          : condition
      )
    );
  };

  const handleSubmit = () => {
    const selected = conditions.filter(condition => condition.checked);
    Alert.alert(
      'Health Conditions Updated',
      `Selected conditions: ${selected.map(c => c.name).join(', ') || 'None'}`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Health Conditions</Text>
        <Text style={styles.subtitle}>
          Please select any health conditions that apply to you. This will help us provide personalized air quality recommendations.
        </Text>

        <View style={styles.conditionsContainer}>
          {conditions.map((condition) => (
            <TouchableOpacity
              key={condition.id}
              style={styles.conditionItem}
              onPress={() => toggleCondition(condition.id)}
            >
              <View style={styles.checkbox}>
                <Text style={[styles.checkboxText, condition.checked && styles.checked]}>
                  {condition.checked ? '✓' : ''}
                </Text>
              </View>
              <Text style={styles.conditionText}>{condition.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Save</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Why do we need this information?</Text>
          <Text style={styles.infoText}>
            Certain health conditions can make you more sensitive to air pollution. 
            By knowing your health status, we can provide more accurate recommendations 
            and alerts when air quality might affect your well-being.
          </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 30,
  },
  conditionsContainer: {
    marginBottom: 30,
  },
  conditionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 4,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 14,
    color: '#2DD4BF',
    fontWeight: 'bold',
  },
  checked: {
    backgroundColor: '#2DD4BF',
    borderColor: '#2DD4BF',
    color: '#FFFFFF',
  },
  conditionText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#2DD4BF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#F0F9FF',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2DD4BF',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0369A1',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#0284C7',
    lineHeight: 20,
  },
});

export default HealthScreen;