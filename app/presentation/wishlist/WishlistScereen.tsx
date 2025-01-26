import React, { useEffect, useState } from 'react';
import { SafeAreaView,FlatList,Text,Image,TextInput, View , StyleSheet,TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../../../App';
import CustomToolbar from '../../component/CustomToolbar';
import { useWishlistViewModel } from '../wishlist/viewmodel/WishlistViewModel';
import { AirbnbRating } from 'react-native-elements';
import styles from './style/WishlistScreen.style';
type WishlistNavigationProp = StackNavigationProp<RootStackParamList, 'Wishlist'>;

type Props = {
  navigation: WishlistNavigationProp;
};

const WishlistScreen = ({navigation}: Props) =>{
   const { wishlist,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    fetchWishlist} = useWishlistViewModel();
    
    useEffect(() => {
      fetchWishlist(); 
    }, []); 
  
    const toggleWishlist = (id:string) => {
      console.log("Remoooove", id)
       removeFromWishlist(id)
     };

   function authorsToString(authors: string[]): string {
      if (authors.length === 0) {
        return "No authors";
      }
      return authors.join(', ');
    }
  
    const handleBackPress = () => {
        navigation.goBack(); 
     };
    const lisBookView =({ item }: { item: any }) => (
              <TouchableOpacity >
              <View style={styles.listItem}>
              <Image source={{ uri: item.smallThumbnail.replace('http://', 'https://')}} style={styles.bookImage} resizeMode="contain" 
                onError={() => console.log('Failed to load image')}
              />
              <View style={styles.bookInfo}>
                  <Text style={styles.bookTitle}>{item.title}</Text>
                  <Text style={styles.bookAuthor}>{authorsToString(item.author)}</Text>
                  <View style={styles.bookRating}>
                  <AirbnbRating
                      count={5}
                      defaultRating={item.ratingsCount}
                      size={16}
                      showRating={false}
                      isDisabled={true}
                      />
                  </View>
                  {/* Tombol Wishlist */}
                  <TouchableOpacity style={styles.wishlistButton}   onPress={() => toggleWishlist(item.bookId)}>
                  <FontAwesome name="heart" size={18} color={"#E04848"}/>
                  </TouchableOpacity>
              </View>
              </View>
          </TouchableOpacity>
    );
      
         

    return(
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
        <CustomToolbar title="Wishlist" onBackPress={handleBackPress} />
            <View style={styles.content}>
                <FlatList
                    data={wishlist}
                    renderItem={lisBookView}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </View>
        </SafeAreaView>
    );

}

export default WishlistScreen;