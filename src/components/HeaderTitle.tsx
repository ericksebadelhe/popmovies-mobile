import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import fonts from '../styles/fonts';

interface HeaderTitleProps {
  children: string;
  tintColor?: string | undefined;
  containerStyle?: StyleProp<ViewStyle>;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children, tintColor, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, { color: tintColor }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default HeaderTitle;