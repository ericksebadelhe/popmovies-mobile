import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../services/api';

import { Movie, RootStackParamList } from '../../@types';

import colors from '../../styles/colors';
import styles from './styles';

type MovieDetailsRouteProps = RouteProp<RootStackParamList, 'MovieDetails'>;

const MovieDetails: React.FC = () => {
  const route = useRoute<MovieDetailsRouteProps>();
  const { goBack } = useNavigation();
  const [details, setDetails] = useState<Movie | undefined>();

  const getMovieDetails = useCallback(async () => {
    const { movieId } = route.params;
    try {
      const response = await api.get(`/movies/${movieId}`);
      setDetails(response.data);
    } catch {
      Alert.alert(
        'Error',
        'Could not find movie details. Please return to the home screen.',
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Go to Home", onPress: () => goBack() }
        ]
      )
    }
  }, []);

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <View style={styles.container}>
      {!details
        ? <ActivityIndicator size='large' color={colors.heading} />
        : (
          <>
            <View style={styles.heading}>
              <Text style={styles.title}>{details.title} {`(${details.year})`}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.topContent}>
                <Image
                  source={{ uri: details.thumbnail }}
                  resizeMode='cover'
                  style={styles.thumbnail}
                />
                <View style={styles.topDetails}>
                  <View>
                    <Text style={styles.duration}>{details.category.toUpperCase()}</Text>
                    <Text style={styles.duration}>
                      {format(new Date(details.release_date), 'yyyy/MM/dd')}
                    </Text>
                    <Text style={styles.duration}>{details.duration} mins</Text>
                  </View>
                  <Text style={styles.rating}>{details.rating}/10</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to favorite</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.synopsisContainer}>
                <Text style={styles.synopsis}>{details.synopsis}</Text>
              </View>
            </View>
          </>
        )
      }
    </View>
  );
}

export default MovieDetails;
