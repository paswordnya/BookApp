import React, { useState ,useEffect} from 'react';
import { SafeAreaView,FlatList,Text,Image,TextInput, View ,TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useHomeViewModel } from "../home/viewmodel/HomeViewModel";
import { RootStackParamList } from '../../../App'
import { AirbnbRating } from 'react-native-ratings';
import { Book } from '../../model/BookModel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style/HomeScreen.style';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) =>{

      useEffect(() => {
      
      }, [])


    const insets = useSafeAreaInsets(); // Mendapatkan safe area insets
     
    const { allBooks, wishlist, loading, error, searchBooks, addToWishlist,removeFromWishlist, fetchWishlist } = useHomeViewModel();

    const [searchText, setSearchText] = useState('');

    const navigationToWishlist = () => {
        navigation.navigate('Wishlist',{});
    };
    const handleSearch = () => {
        if (searchText.trim()) {
           fetchWishlist()
            searchBooks(searchText);
          } else {
            Alert.alert("Please enter a search keyword.");
          }
    };

    function authorsToString(authors: string[]): string {
        if (authors.length === 0) {
          return "No authors";
        }
       
        return authors.join(', ');
    }

    const navigationToBookDetail = (book:Book) => {
        navigation.navigate('BookDetail',{book});
    };

      useEffect(() => {
        fetchWishlist()
        searchBooks('keyword'); 
      }, []); 
     
      const toggleWishlist = (bookData:Book) => {
        try{
          bookData.volumeInfo.isWishlist = !bookData.volumeInfo.isWishlist 
          Alert.alert(bookData.volumeInfo.isWishlist ? 'Added to Wishlist!' : 'Remove From Wishlist!' );
          bookData.volumeInfo.isWishlist ?  addToWishlist(bookData) : removeFromWishlist(bookData.id);
        }catch(err) {
          console.log(err)   
        }
        
      };


    const lisBookView = ({ item }: { item: typeof allBooks[0] }) => (
        <TouchableOpacity onPress={()=> navigationToBookDetail(item)}>
            <View style={styles.listItem}>
            <Image source={{ uri: item.volumeInfo.imageLinks?.smallThumbnail.replace('http://', 'https://')}} style={styles.bookImage} resizeMode="contain" 
              onError={() => console.log('Failed to load image')}
            />
            <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
                <Text style={styles.bookAuthor}>{authorsToString(item.volumeInfo.authors)}</Text>
                <View style={styles.bookRating}>
                <AirbnbRating
                    count={5}
                    defaultRating={item.volumeInfo.ratingsCount}
                    size={16}
                    showRating={false}
                    isDisabled={true}
                    />
                </View>
                {/* Tombol Wishlist */}
                <TouchableOpacity style={styles.wishlistButton}   onPress={() => toggleWishlist(item)}>
                <FontAwesome name="heart" size={18} color={item.volumeInfo.isWishlist ? "#E04848"  : "#808080" }/>
                </TouchableOpacity>
            </View>
            </View>
        </TouchableOpacity>
      );

     
    return (
        <SafeAreaView style={styles.container}>
            {/* Toolbar  */}
            <View style={styles.toolbar}>
            <TouchableOpacity>
                <Image
                source={{
                    uri: 'https://media.licdn.com/dms/image/v2/C5103AQGFr7U_iC2sUg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1563254503849?e=1743033600&v=beta&t=1xMAUGyR0v7wEKYGIqcdaZLVkrlI4sQOz0E8PcIJdqo', // Gambar profil contoh
                }}
                style={styles.profileIcon}
                />
           </TouchableOpacity>
                <Text style={styles.title}>Book App</Text>
                <TouchableOpacity onPress={() => navigationToWishlist()} >
                    <FontAwesome name="shopping-bag" size={18} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
            {/* End Toolbar  */}
              
             {/* Body  */}
            <View style={styles.body}>
                   {/* Search  */}
                    <View style={styles.searchIconContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search..."
                            value={searchText}
                            onChangeText={setSearchText}
                            onSubmitEditing={handleSearch}
                        />
                        <TouchableOpacity style={styles.iconContainer} onPress={handleSearch}>
                            <Image
                            source={require('../../../assets/search.png')} // Gambar ikon pencarian lokal
                            style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                  {/* End Search  */}
                {/* Content  */}
                <View style={styles.content}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: loading ? 1 : 0,  }}>
                  <ActivityIndicator size="large" color="#E04848" />
                  <Text>Loading...</Text>
                </View>
                <FlatList
                    data={allBooks}
                    renderItem={lisBookView}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false} 
                    ListFooterComponent={<View style={{ height: insets.bottom + 150 }} />}
                 />
                </View>
                {/* End Content  */}
            </View>
                    {/* End Body  */}
        </SafeAreaView>
    )
}

export default HomeScreen;