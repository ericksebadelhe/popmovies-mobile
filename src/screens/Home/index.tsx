import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import MoviePoster from '../../components/MoviePoster';

import { GetMoviesData } from '../../@types';
import styles from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState<GetMoviesData[]>([]);

  const handleNavigateToMovieDetails = useCallback((movieId: string) => {
    navigate('MovieDetails', { movieId });
  }, [navigate])

  const getMovies = async () => {
    const result = await api.get('/movies');

    if (result) {
      setData(result.data);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MoviePoster
            uri={item.thumbnail}
            onPress={() => handleNavigateToMovieDetails(item.id)}
          />
        )}
        numColumns={2}
        bounces={false}
        style={styles.list}
      />
    </View>
  );
}

export default Home;