/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/presentation/home/HomeScreen';
import WishlistScreen from './app/presentation/wishlist/WishlistScereen';
import BookDetailScreen from './app/presentation/bookdetail/BookDetailScreen';
import store from './app/store/store';
import { Book } from './app/model/BookModel';
import SplashScreen from './app/presentation/splash/SplashScreen';

export type RootStackParamList = {
  Splash: {  }; 
  Home: {  }; 
  Wishlist: { }; 
  BookDetail: {book: Book}; 
};
const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
       
        <Stack.Screen name="Home" component={HomeScreen} 
         options={{ headerShown: false }} 
        />
        <Stack.Screen name="Wishlist" component={WishlistScreen} 
         options={{ headerShown: false }} 
        />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} 
         options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default App;
