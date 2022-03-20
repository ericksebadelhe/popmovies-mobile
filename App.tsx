import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';
import Routes from './src/routes';


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
      <Routes />
    </SafeAreaProvider>
  )
}

export default App;