// Import necessary components and hooks from React
import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

// Main App component
export default function App() {

  return (
    // Main container view
    <View style={styles.container}>
      {/* Pressable button to increment clicks */}
      <Pressable style={styles.button} onPress={() => alert("Hello!")}>
        {/* Display the number of clicks */}
        <Text style={styles.buttonText}>999 clicks</Text>
      </Pressable>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2486B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#D8973D',
  },
  buttonText: {
    color: '#fff',
    fontSize: 48,
  },
});
