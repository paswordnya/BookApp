import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App'
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
 
    setTimeout(() => {
        navigation.navigate('Home',{});
    }, 3000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/splashLogo.png')} 
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to the App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0278fc',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
