import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';
import HeaderButton from '../components/HeaderButton';
import HeaderTitle from '../components/HeaderTitle';

import { defaultScreenOptions } from '../utils/defaultScreenOptions';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: { movieId: string };
};

const StackRoutes = createNativeStackNavigator<RootStackParamList>();

const Routes = () => (
  <NavigationContainer>
    <StackRoutes.Navigator
      screenOptions={{
        ...defaultScreenOptions,
        headerRight: () => <HeaderButton icon="more-vert" />,
      }}
    >
      <StackRoutes.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => (
            <HeaderTitle
              containerStyle={{ marginLeft: 16 }}
              {...props}
            >
              Pop Movies
            </HeaderTitle>),
        }}
      />
      <StackRoutes.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={({ navigation }) => ({
          headerTitle: props => <HeaderTitle {...props}>Movie Details</HeaderTitle>,
          headerLeft: () => (
            <HeaderButton
              icon="arrow-back"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </StackRoutes.Navigator>
  </NavigationContainer>
);

export default Routes;