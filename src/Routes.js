import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="AccountPage"
          component={AccountPage}
          options={{title: 'Account'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
