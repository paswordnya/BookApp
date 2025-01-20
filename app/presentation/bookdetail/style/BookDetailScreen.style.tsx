import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
          flexDirection: 'column',  
          justifyContent: 'center',  
          alignItems: 'center', 
          backgroundColor: '#fff',
    },
  
  
    content:{
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center',  
        alignItems: 'center', 
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal:12,
        paddingVertical:2,
      },
  
      bookImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20,
      },
      bookTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
      },
      bookAuthor: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 20,
      },
      bookDescription: {
        fontSize: 14,
        color: '#555',
        lineHeight: 22,
      },
      fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#ff6b6b',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
      bookRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10
      },
      ratingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 4,
      },
    });
    
  export default styles;