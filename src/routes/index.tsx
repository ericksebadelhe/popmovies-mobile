import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const StackRoutes = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <StackRoutes.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <StackRoutes.Screen name="Home" component={Home} />
    </StackRoutes.Navigator>
  </NavigationContainer>
);

export default Routes;