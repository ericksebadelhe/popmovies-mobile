import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';


const App: React.FC = () => {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <Routes />
    </SafeAreaProvider>
  )
}

export default App;