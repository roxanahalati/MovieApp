import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../MovieApp/components/HomePage/HomeScreen';
import DetailsScreen from '../MovieApp/components/DetailsPage/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{headerShown: false}}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
