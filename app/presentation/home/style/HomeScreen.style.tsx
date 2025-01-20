import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#E04848'
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        backgroundColor: '#E04848',
        padding: 10,
        width: '100%',
      },
      body:{
       
      },
      backButton: {
        marginRight: 10,
      },
    
      title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal:12
      },
      profileIcon: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
      },
      input: {
        flex: 1, // Agar input mengisi ruang yang tersisa
        fontSize: 16,
        color: '#333',
        paddingLeft: 10,
        paddingVertical: 8,
      },
      searchIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        margin:12
      },
      iconContainer: {
        padding: 10,
      },
      icon: {
        width: 20,
        height: 20,
        tintColor: '#000000',
      },
      content:{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF', // Warna latar belakang yang membulat
        borderTopLeftRadius: 20, // Membulatkan sudut kiri atas
        borderTopRightRadius: 20, // Membulatkan sudut kanan atas
        paddingHorizontal:12,
        paddingVertical:2
      },

      listContent: {
        marginVertical:12
      },
      listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      bookImage: {
        width: 80,
        height: 100,
        borderRadius: 5,
        marginRight: 10,
      },
      bookInfo: {
        flex: 1, // Mengisi ruang yang tersedia
        justifyContent: 'center',
      },
      bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      bookAuthor: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
      },
      bookRating: {
        marginTop:5,
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 4,
      },

      wishlistButton: {
        marginTop:5,
        padding: 4,
      },

      
});
export default styles;