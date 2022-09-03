/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import SwitchToggle from 'react-native-switch-toggle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import styles from '../HomePage/homeScreenStyle';

const HomeScreen = ({navigation}) => {
  const apiURL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=4ab41b8fbf99f04efdfa62c14110ac7f&language=en-US&page=1';
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [moviesSearchedFor, setMoviesSearchedFor] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetchMoviesFromApi();
    NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });
  }, []);

  const fetchMoviesFromApi = async () => {
    const data = await fetch(apiURL);
    const fetchedMovies = await data.json();
    setMovies(fetchedMovies.results);
  };

  const searchMovies = async search => {
    const searchURL =
      'https://api.themoviedb.org/3/search/movie?api_key=4ab41b8fbf99f04efdfa62c14110ac7f&language=en-US&query=' +
      search +
      '&include_adult=false';
    setSearchString(search);
    const data = await fetch(searchURL);
    const foundMovies = await data.json();
    setMoviesSearchedFor(foundMovies.results);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            searchMovies(text);
          }}
          value={searchString}
          placeholder="Search movies..."
        />
        {searchString != '' ? (
          <Text style={styles.sectionTitle}>Results:</Text>
        ) : null}
        <FlatList
          data={moviesSearchedFor}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                navigation.navigate('Details', {movie: item});
              }}>
              <Text style={styles.title}> {item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <Text style={styles.sectionTitle}>Top Movies</Text>
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                navigation.navigate('Details', {movie: item});
              }}>
              <Text style={styles.title}> {item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.connectedView}>
          <Text style={styles.sectionTitle}>Connected:</Text>
          <SwitchToggle
            switchOn={connected}
            containerStyle={{
              width: 40,
              height: 20,
              borderRadius: 20,
              marginTop: 4,
            }}
            circleStyle={{
              width: 16,
              height: 16,
              borderRadius: 16 / 2,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
