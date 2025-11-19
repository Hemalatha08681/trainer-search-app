// import { Text, StyleSheet, View } from 'react-native';
// import React, { Component } from 'react';

// export default class home extends Component {
//   render() {
//     return (
//       <View>
//         <Text>hi..............ssss</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Profile Image */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }} // sample profile picture
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Hemalatha k 😎</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        React Native Learner | Coding Enthusiast 🚀
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Edit Profile")}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
 profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#da13b2ff',
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  bio: {
    fontSize: 16,
    color: '#12ef42ff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#c5cb1aff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  buttonText: {
    color: '#544545ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
