import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Test from './components/SocialMedia/Test';
import ToDoList from './components/List';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="To Do List" component={ToDoList} options={{ tabBarIcon: () => <Text>🏃🏻‍♂️</Text>}} />
      <Tab.Screen name="Social Media" component={Test} options={{ tabBarIcon: () => <Text>🌎</Text>}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
