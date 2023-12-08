// Import necessary components and screens
import Home from './screens/Home';
import Alerts from './screens/Alerts'; 
import Calendar from './screens/Calendar'; 
import Settings from './screens/Settings';

// Import navigation components from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Define common screen options for the bottom tab navigator
const ScreenOptions = {
  tabBarStyle: { backgroundColor: '#437692' }, // Styling for the entire tab bar
  tabBarActiveTintColor: 'white', // Color for active tab
  tabBarInactiveTintColor: 'white', // Color for inactive tabs
};

// Main App component
export default function App() {
  return (
    // Container for navigation
    <NavigationContainer>
      {/* Bottom tab navigator */}
      <Tab.Navigator
        screenOptions={ScreenOptions} // Apply common styling to all screens
      >
        {/* Home screen */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home', // Displayed label for the tab
            tabBarIcon: ({ color, size }) => (
              // Icon for the tab
              <Ionicons name="md-home" size={size} color={color} />
            ),
            headerStyle: { backgroundColor: '#D1793A' }, // Header background color for Home
            headerTintColor: 'white', // Header text color
          }}
        />

        {/* Alerts screen */}
        <Tab.Screen
          name="Alerts"
          component={Alerts}
          options={{
            tabBarLabel: 'Alerts',
            tabBarBadge: 5, // Display a badge on the tab
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-alert" size={size} color={color} />
            ),
            headerStyle: { backgroundColor: '#D1793A' }, // Header background color for Home
            headerTintColor: 'white', // Header text color
          }}
        />

        {/* Calendar screen */}
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-calendar" size={size} color={color} />
            ),
            headerStyle: { backgroundColor: '#D1793A' }, // Header background color for Home
            headerTintColor: 'white', // Header text color
          }}
        />

        {/* Settings screen */}
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-settings" size={size} color={color} />
            ),
            headerStyle: { backgroundColor: '#D1793A' }, // Header background color for Home
            headerTintColor: 'white', // Header text color
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
