import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

const MovieDetails: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie Details</Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>GO BACK</Text>
      </TouchableOpacity>
    </View>
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

export default MovieDetails;