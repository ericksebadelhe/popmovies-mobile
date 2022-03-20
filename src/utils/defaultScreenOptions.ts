import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.body_dark,
  },
  headerTintColor: colors.background,
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: fonts.heading,
  },
  headerBackTitleVisible: false,
}