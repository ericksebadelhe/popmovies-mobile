import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 20,
  }
});