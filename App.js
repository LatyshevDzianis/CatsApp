import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    almostBlue: '#487eb0',
    lightGrey: '#95a5a6',
    black: '#000',
    white: '#fff',
  },
};

const App = () => {
  return (
    <NavigationContainer
      theme={MyTheme}
      onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator screenOptions={{headerStyle: styles.header}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Cats'}}
        />
        <Stack.Screen
          name="CatDetails"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.cat.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ddd6f3',

    shadowColor: MyTheme.colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default App;
