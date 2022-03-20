import React from 'react';
import { TouchableOpacity, Image, TouchableOpacityProps, Dimensions } from 'react-native';

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
        style={{
          width: Dimensions.get('window').width / 2,
          height: Dimensions.get('window').height / 3
        }} />
    </TouchableOpacity>
  );
}

export default MoviePoster;