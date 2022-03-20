import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from 'react-native';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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