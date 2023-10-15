import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Setting from './components/Setting';
import Caculator from './components/Caculator';
import Caculator2 from './components/Caculator2';
import Test from './components/SocialMedia/Test';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Text>😏</Text>}} />
      <Tab.Screen name="Settings" component={Setting} options={{ tabBarIcon: () => <Text>🤬</Text>}} />
      <Tab.Screen name="Caculator" component={Caculator} options={{ tabBarIcon: () => <Text>🤯</Text>}} />
      <Tab.Screen name="Caculator2" component={Caculator2} options={{ tabBarIcon: () => <Text>🤪</Text>}} />
      <Tab.Screen name="Social Media" component={Test} options={{ tabBarIcon: () => <Text>aa</Text>}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
