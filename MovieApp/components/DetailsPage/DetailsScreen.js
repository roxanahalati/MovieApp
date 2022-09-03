/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './detailScreenStyle';

const DetailsScreen = ({navigation, route}) => {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width - 32;
  const imagePath =
    'http://image.tmdb.org/t/p/w500/' + route.params.movie.backdrop_path;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.movieTitle}>{route.params.movie.title}</Text>
        <Text style={styles.otherText}>
          Release date: {route.params.movie.release_date}
        </Text>
        <Image
          style={{alignSelf: 'center', width: imageWidth, height: imageHeight}}
          source={{uri: imagePath}}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{route.params.movie.overview}</Text>
        </View>

        <Text style={styles.otherText}>
          IMDb rating: {route.params.movie.vote_average} ({' '}
          {route.params.movie.vote_count} votes)
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
