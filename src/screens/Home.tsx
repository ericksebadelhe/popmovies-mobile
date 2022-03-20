import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigateToMovieDetails = useCallback(() => {
    navigate('MovieDetails');
  }, [navigate])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress={handleNavigateToMovieDetails}>
        <Text>PRESS HERE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  }
});

export default Home;