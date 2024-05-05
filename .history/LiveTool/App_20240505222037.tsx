import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

// 创建两个页面组件
function MainPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the main page</Text>
    </View>
  );
}

function DetailsPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the details page</Text>
    </View>
  );
}

// 创建一个 Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainPage} options={{ title: 'Main Page' }} />
        <Stack.Screen name="Details" component={DetailsPage} options={{ title: 'Details Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;