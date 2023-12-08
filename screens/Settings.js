// Import necessary components and hooks from React
import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

// Main App component
export default function App() {
  // State variable to track the number of clicks
  const [click, setClicks] = useState(0);

  return (
    // Main container view
    <View style={styles.container}>
      {/* Pressable button to increment clicks */}
      <Pressable style={styles.button} onPress={() => setClicks((old) => old + 1)}>
        {/* Display the number of clicks */}
        <Text style={styles.buttonText}>{click} clicks</Text>
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
