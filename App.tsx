/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/presentation/home/HomeScreen';
import WishlistScreen from './app/presentation/wishlist/WishlistScereen';
import BookDetailScreen from './app/presentation/bookdetail/BookDetailScreen';
import store from './app/store/store';
import { Book } from './app/model/BookModel';
import SplashScreen from './app/presentation/splash/SplashScreen';
import ProfileScreen from './app/presentation/profile/ProfileScreen';
export type RootStackParamList = {
  Splash: {  }; 
  Home: {  }; 
  Wishlist: { }; 
  BookDetail: {book: Book}; 
  Profile:{ };
};
const Stack = createStackNavigator();

function App(): React.JSX.Element {
 

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
       <Stack.Screen name="Profile" component={ProfileScreen} 
         options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default App;
