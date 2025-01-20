// src/repositories/BookRepository.ts
import firestore from '@react-native-firebase/firestore';
import { Book } from '../../model/BookModel';

const BookRepository = {
  // Add book to wishlist in Firestore
  addToWishlist: async (book: Book): Promise<void> => {
    try {
      await firestore()
        .collection('wishlist')
        .doc(book.id)
        .set({
            bookId: book.id,
            title: book.volumeInfo.title,
            smallThumbnail: book.volumeInfo.imageLinks?.smallThumbnail,
            thumbnail: book.volumeInfo.imageLinks?.thumbnail,
            description: book.volumeInfo.description,
            author : book.volumeInfo.authors,
            ratingsCount: book.volumeInfo.ratingsCount,


         }); 
    } catch (error) {
      throw new Error('Failed to add to wishlist');
    }
  },

  // Remove book from wishlist in Firestore
  removeFromWishlist: async (bookId: string): Promise<void> => {
    try {
      await firestore()
        .collection('wishlist')
        .doc(bookId)
        .delete();
    } catch (error) {
      throw new Error('Failed to remove from wishlist');
    }
  },

  getWishlist: async (): Promise<any> => {
    try {
      const snapshot = await firestore()
        .collection('wishlist')
        .get();
      return snapshot.docs.map(doc => doc.data());
    } catch (error) {
      throw new Error('Failed to fetch wishlist');
    }
  },

};


export default BookRepository;
