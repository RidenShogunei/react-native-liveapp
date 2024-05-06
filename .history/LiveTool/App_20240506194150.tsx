import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import MainPage from './pages/mian';
import { PaperProvider } from 'react-native-paper';

// 创建一个 Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider></PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
