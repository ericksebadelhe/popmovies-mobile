import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  duration: {
    fontFamily: fonts.text,
    color: colors.body_dark,
  },
  heading: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    backgroundColor: colors.body,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.background,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  topContent: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 116,
    height: 170,
  },
  topDetails: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  year: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors.body_dark,
  },
  rating: {
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: colors.accent_dark,
  },
  buttonText: {
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  synopsisContainer: {
    marginTop: 24,
  },
  synopsis: {
    fontFamily: fonts.text,
    color: colors.body,
    textAlign: 'justify',
  }
});