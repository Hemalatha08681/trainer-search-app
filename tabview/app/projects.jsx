/*import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function projects() {
  return (
    <View>
      <Text>projects</Text>
    </View>
  )
}

const styles = StyleSheet.create({})*/
import { View, Text, FlatList, StyleSheet } from 'react-native';

const projectsData = [
  { id: '1', name: "Portfolio Website", status: "Completed" },
  { id: '2', name: "React Native App", status: "In Progress" },
  { id: '3', name: "API Backend", status: "Planned" },
  { id: '4', name: "Blog Platform", status: "Completed" },
  { id: '5', name: "Chat App", status: "In Progress" },
  { id: '6', name: "E-commerce App", status: "Planned" },
];

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projects</Text>
      <FlatList
        data={projectsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.projectStatus}>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  projectCard: { padding: 15, backgroundColor: '#94a1a277', borderRadius: 8, marginBottom: 10 },
  projectName: { fontSize: 18, fontWeight: '600' },
  projectStatus: { fontSize: 14, color: '#00796b', marginTop: 5 },
});
