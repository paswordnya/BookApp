import React, { useState } from 'react';
import { SafeAreaView,ScrollView,Text,Image,Alert, View , StyleSheet,TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import CustomToolbar from '../../component/CustomToolbar';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AirbnbRating } from 'react-native-elements';
import { useBookDetailViewModel } from './viewmodel/BookDetailViewModel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../bookdetail/style/BookDetailScreen.style'

type BookDetailNavigationProp = StackNavigationProp<RootStackParamList, 'BookDetail'>;
type BookDetailRouteProp = RouteProp<RootStackParamList, 'BookDetail'>;

type Props = {
  navigation: BookDetailNavigationProp;
};

const BookDetailScreen = ({navigation}: Props) =>{
   const { 
      loading,
      error,
      addToWishlist,
      removeFromWishlist} = useBookDetailViewModel();
      
  const insets = useSafeAreaInsets(); 

  const route = useRoute<BookDetailRouteProp>();
  const { book } = route.params; 
 
  const handleBackPress = () => {
    navigation.goBack(); 
  };

  function authorsToString(authors: string[]): string {
    if (authors.length === 0) {
      return "No authors";
    }
    return authors.join(', ');
}
     
   const [bookDetail, setBooks] = useState(book);

      const toggleWishlist = (bookId: string) => {
        if (bookDetail.id === bookId) {
          const updatedBook = {
            ...bookDetail,
            volumeInfo: {
              ...bookDetail.volumeInfo,
              isWishlist: !bookDetail.volumeInfo.isWishlist, 
            },
          };
          setBooks(updatedBook);  
          updatedBook.volumeInfo.isWishlist ? addToWishlist(updatedBook) : removeFromWishlist(updatedBook.id)
          Alert.alert(updatedBook.volumeInfo.isWishlist ? 'Added to Wishlist!' : 'Remove From Wishlist!' );
        }
      };

    return(<SafeAreaView style={styles.container}>
              <View >
                <CustomToolbar title="Detail" onBackPress={handleBackPress} />
                <View style={styles.content}>
                <ScrollView >
                  {/* Gambar Buku */}
                  <Image
                    source={{ uri: bookDetail.volumeInfo.imageLinks?.thumbnail.replace('http://', 'https://')}} // Ganti dengan URL gambar
                    style={styles.bookImage}
                    resizeMode="contain"
                  />

                  {/* Informasi Buku */}
                  <Text style={styles.bookTitle}>{bookDetail.volumeInfo.title}</Text>
                    <View style={styles.bookRating}>
                    <AirbnbRating
                              count={5}
                              defaultRating={bookDetail.volumeInfo.ratingsCount}
                              size={16}
                              showRating={false}
                              isDisabled={true}
                              />
                    </View>
                  <Text style={styles.bookAuthor}>by Author:  {authorsToString(bookDetail.volumeInfo.authors)}</Text>
                  <Text style={styles.bookDescription}>
                  {book.volumeInfo.description}
                  </Text>
                </ScrollView>
              </View>

            {/* Floating Action Button */}
            <TouchableOpacity
              style={[
                styles.fab,
                { bottom: insets.bottom + 20 }, // Tambahkan safe area bottom
              ]}
              onPress={() => toggleWishlist(bookDetail.id)}>
              <FontAwesome name="heart" size={24} color={bookDetail.volumeInfo.isWishlist ? "#E04848"  : "#808080" }/>
            </TouchableOpacity>
          </View>
      </SafeAreaView>);
}

export default BookDetailScreen;