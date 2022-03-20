import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../styles/colors';

interface HeaderButtonProps extends TouchableOpacityProps {
  icon: any;
  size?: number;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ icon, size, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      <MaterialIcons name={icon} color={colors.background} size={size || 20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HeaderButton;