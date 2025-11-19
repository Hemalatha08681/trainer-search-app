/*import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})*/
import { View, Text, FlatList, StyleSheet } from 'react-native';

const homeData = [
  { id: '1', title: "Welcome", message: "Welcome to my app!" },
  { id: '2', title: "News", message: "New features coming soon." },
  { id: '3', title: "Tips", message: "Check out the Projects tab for ideas." },
  { id: '4', title: "Updates", message: "Your profile has been updated successfully." },
  { id: '5', title: "Reminder", message: "Don't forget to explore all tabs." },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <FlatList
        data={homeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardMessage}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: { padding: 15, backgroundColor: '#a9c1ac8e', borderRadius: 8, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: '600' },
  cardMessage: { fontSize: 14, color: '#ba16dbff', marginTop: 5 },
});
