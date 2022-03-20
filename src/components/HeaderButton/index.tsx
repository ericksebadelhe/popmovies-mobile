import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import styles from './styles';

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



export default HeaderButton;