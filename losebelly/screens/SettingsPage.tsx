import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList } from 'react-native';

const DATA = [
  {
    title: 'WORKOUT',
    data: [
      { key: 'Sound options' },
      { key: 'Coach voice: Kelly' },
      { key: 'Training rest: 31 secs' },
      { key: 'Remove ads', price: 'Upgrade to remove ads' },
    ],
  },
  {
    title: 'GENERAL SETTINGS',
    data: [
      { key: 'Health Data' },
      { key: 'Remind me to work out every day' },
      { key: 'First day of week' },
      { key: 'Metric & Imperial Units' },
    ],
  },
  {
    title: 'SUPPORT US',
    data: [
      { key: 'Rate us' },
      { key: 'Share with friends' },
      { key: 'Common questions' },
      { key: 'Privacy policy' },
    ],
  },
];

const SettingsPage = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => alert(`Selected: ${item.key}`)}>
      <Text style={styles.itemText}>{item.key}</Text>
      {item.price && <Text style={styles.priceText}>{item.price}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
  },
  priceText: {
    fontSize: 14,
    color: '#ff5c5c',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SettingsPage;