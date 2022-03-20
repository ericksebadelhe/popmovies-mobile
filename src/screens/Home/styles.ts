import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  list: {
    flex: 1,
    marginBottom: 24,
  }
});