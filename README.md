import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  bio: 'React Native developer and enthusiast.',
  avatarUrl: 'https://picsum.photos/200', // Placeholder image
  followers: 1.25, // in K
  following: 350,
};

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* --- Profile Header (Avatar and Basic Info) --- */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatarUrl }}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* --- Stats Section --- */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statCount}>{user.followers}K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBox}>
          <Text style={styles.statCount}>{user.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* --- Bio Section --- */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>About Me</Text>
        <Text style={styles.bioText}>{user.bio}</Text>
      </View>
      
      {/* Add more profile sections here (e.g., Settings, Posts, etc.) */}

    </ScrollView>
  );
};

// --- Styling ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff', // White header background
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes it circular
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#007bff', // Accent color border
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },

  bioContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bioText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});
