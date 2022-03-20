import React from 'react';
import { TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface MoviePosterProps extends TouchableOpacityProps {
  uri: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ uri, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <Image
        source={{ uri }}
        resizeMethod="resize"
        resizeMode='cover'
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

export default MoviePoster;