import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f5f6fa',
    almostBlue: '#487eb0',
    lightGrey: '#95a5a6',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Cats' }}
        />
        <Stack.Screen
          name="CatDetails"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.cat.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
