import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import MainPage from './pages/mian';


// 创建一个 Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{title: 'Main Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
