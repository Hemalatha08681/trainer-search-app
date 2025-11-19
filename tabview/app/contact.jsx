/*import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View>
      <Text>contract</Text>
    </View>
  )
}

const styles = StyleSheet.create({})*/
import { View, Text, FlatList, StyleSheet } from 'react-native';

const contactData = [
  { id: '1', type: "Phone", value: "+91 78969 88590" },
  { id: '2', type: "Email", value: "example@example.com" },
  { id: '3', type: "Address", value: "123 Main Street, City, Country" },
  { id: '4', type: "Support", value: "support@example.com" },
  { id: '5', type: "Office Phone", value: "+1 987 654 321" },
  { id: '6', type: "Fax", value: "+91 80505 805o5" },
];

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact</Text>
      <FlatList
        data={contactData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardType}>{item.type}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: { padding: 15, backgroundColor: 'rgba(208, 198, 204, 0.32)', borderRadius: 8, marginBottom: 10 },
  cardType: { fontSize: 18, fontWeight: '600' },
  cardValue: { fontSize: 14, color: '#632ed4ff', marginTop: 5 },
});
