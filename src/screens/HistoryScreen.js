import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HistoryScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('7days');
  
  const screenWidth = Dimensions.get('window').width;

  // Mock historical data
  const historicalData = {
    '7days': [
      { date: 'Apr 1', aqi: 45, status: 'Good' },
      { date: 'Apr 2', aqi: 52, status: 'Moderate' },
      { date: 'Apr 3', aqi: 38, status: 'Good' },
      { date: 'Apr 4', aqi: 65, status: 'Moderate' },
      { date: 'Apr 5', aqi: 42, status: 'Good' },
      { date: 'Apr 6', aqi: 48, status: 'Good' },
      { date: 'Apr 7', aqi: 50, status: 'Good' },
    ],
    '30days': [
      { date: 'Week 1', aqi: 48, status: 'Good' },
      { date: 'Week 2', aqi: 55, status: 'Moderate' },
      { date: 'Week 3', aqi: 42, status: 'Good' },
      { date: 'Week 4', aqi: 51, status: 'Moderate' },
    ],
    '6months': [
      { date: 'Nov', aqi: 52, status: 'Moderate' },
      { date: 'Dec', aqi: 45, status: 'Good' },
      { date: 'Jan', aqi: 58, status: 'Moderate' },
      { date: 'Feb', aqi: 41, status: 'Good' },
      { date: 'Mar', aqi: 49, status: 'Good' },
      { date: 'Apr', aqi: 47, status: 'Good' },
    ],
  };

  const periods = [
    { key: '7days', label: '7 Days' },
    { key: '30days', label: '30 Days' },
    { key: '6months', label: '6 Months' },
  ];

  const currentData = historicalData[selectedPeriod];
  const maxAQI = Math.max(...currentData.map(d => d.aqi));

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return '#10B981';
    if (aqi <= 100) return '#F59E0B';
    if (aqi <= 150) return '#F97316';
    if (aqi <= 200) return '#EF4444';
    if (aqi <= 300) return '#8B5CF6';
    return '#7C2D12';
  };

  const SimpleChart = ({ data }) => {
    const chartHeight = 200;
    const chartWidth = screenWidth - 80;
    const barWidth = (chartWidth - (data.length - 1) * 10) / data.length;

    return (
      <View style={styles.chartContainer}>
        <View style={[styles.chart, { height: chartHeight, width: chartWidth }]}>
          {data.map((item, index) => {
            const barHeight = (item.aqi / maxAQI) * (chartHeight - 40);
            return (
              <View key={index} style={styles.barContainer}>
                <View style={styles.barWrapper}>
                  <Text style={styles.aqiValue}>{item.aqi}</Text>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: barHeight,
                        width: barWidth,
                        backgroundColor: getAQIColor(item.aqi),
                      },
                    ]}
                  />
                </View>
                <Text style={styles.dateLabel}>{item.date}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const StatCard = ({ title, value, subtitle, color }) => (
    <View style={styles.statCard}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statSubtitle}>{subtitle}</Text>
    </View>
  );

  const averageAQI = Math.round(
    currentData.reduce((sum, item) => sum + item.aqi, 0) / currentData.length
  );

  const bestDay = currentData.reduce((best, current) =>
    current.aqi < best.aqi ? current : best
  );

  const worstDay = currentData.reduce((worst, current) =>
    current.aqi > worst.aqi ? current : worst
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Historical Data</Text>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period.key}
              style={[
                styles.periodButton,
                selectedPeriod === period.key && styles.selectedPeriod,
              ]}
              onPress={() => setSelectedPeriod(period.key)}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period.key && styles.selectedPeriodText,
                ]}
              >
                {period.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart */}
        <SimpleChart data={currentData} />

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <StatCard
            title="Average AQI"
            value={averageAQI}
            subtitle="Overall average"
            color={getAQIColor(averageAQI)}
          />
          <StatCard
            title="Best Day"
            value={bestDay.aqi}
            subtitle={bestDay.date}
            color={getAQIColor(bestDay.aqi)}
          />
          <StatCard
            title="Worst Day"
            value={worstDay.aqi}
            subtitle={worstDay.date}
            color={getAQIColor(worstDay.aqi)}
          />
        </View>

        {/* Data Table */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Detailed Data</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 1 }]}>Date</Text>
            <Text style={[styles.tableHeaderText, { flex: 1 }]}>AQI</Text>
            <Text style={[styles.tableHeaderText, { flex: 2 }]}>Status</Text>
          </View>
          {currentData.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCellText, { flex: 1 }]}>{item.date}</Text>
              <Text style={[styles.tableCellText, { flex: 1, color: getAQIColor(item.aqi) }]}>
                {item.aqi}
              </Text>
              <Text style={[styles.tableCellText, { flex: 2 }]}>{item.status}</Text>
            </View>
          ))}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: 20,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  selectedPeriod: {
    backgroundColor: '#2DD4BF',
  },
  periodText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '600',
  },
  selectedPeriodText: {
    color: '#FFFFFF',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#F9FAFB',
    padding: 20,
    borderRadius: 12,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  barContainer: {
    alignItems: 'center',
  },
  barWrapper: {
    alignItems: 'center',
    marginBottom: 8,
  },
  bar: {
    borderRadius: 4,
    marginTop: 4,
  },
  aqiValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  dateLabel: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  statCard: {
    backgroundColor: '#F9FAFB',
    padding: 15,
    borderRadius: 8,
    flex: 0.3,
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statSubtitle: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  tableContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tableCellText: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default HistoryScreen;