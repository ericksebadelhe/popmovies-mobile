import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

interface HeaderTitleProps {
  children: string;
  tintColor?: string | undefined;
  containerStyle?: StyleProp<ViewStyle>;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  children,
  tintColor,
  containerStyle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[styles.title, { color: tintColor }]}
      >
        {children}
      </Text>
    </View>
  );
}

export default HeaderTitle;