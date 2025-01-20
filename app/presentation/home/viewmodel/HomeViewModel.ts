import { useState } from "react";
import { Book, transformApiDataToBook } from "../../../model/BookModel";
import { HomeRepository } from "../../../repository/home/HomeRepository";
import BookRepository from '../../../repository/wishlist/WishlistRepository';

export const useHomeViewModel = () => {
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [allBooks, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const bookRepository = new HomeRepository();
  
    const searchBooks = async (keyword: string) => {
        if (!keyword) {
            setError('Keyword is required');
            return;
        }
        setLoading(true);
        setError(null);

        try {
            setBooks([]);
            const data = await bookRepository.searchBooks(keyword);
            
            // const updatedBooks =  data.items.map(book => {
            //     const isWishlist = wishlist.some(item => item.bookId === book.id);
            //      book.volumeInfo.isWishlist = isWishlist ?  true : false;
            //      console.log("Heloooooo", isWishlist);
            //   });
          
            const mappedBooks = data.items.map(transformApiDataToBook)
            setBooks(mappedBooks); // Updated state Book
        } catch (err) {
           
            setError('Error fetching data');
        } finally {
            setLoading(false); 
        }
    };

    const addToWishlist = async (book: Book) => {
        setLoading(true);
        setError(null);
        try {
          await BookRepository.addToWishlist(book);
         // fetchWishlist(); // Refresh wishlist
        } catch (err) {
          setError('Failed to add to wishlist');
        } finally {
          setLoading(false);
        }
      };


    // Fetch wishlist from Firestore
    const fetchWishlist = async () => {
        setLoading(true);
        setError(null);
        try {
        const data = await BookRepository.getWishlist();
        setWishlist(data);
        } catch (err) {
        setError('Failed to fetch wishlist');
        } finally {
        setLoading(false);
        }
    };
       // Remove from wishlist
    const removeFromWishlist = async (bookId: string) => {
        setLoading(true);
        setError(null);
        try {
        await BookRepository.removeFromWishlist(bookId);
        
        } catch (err) {
        setError('Failed to remove from wishlist');
        } finally {
        setLoading(false);
        }
    };

    

    return { allBooks, wishlist, loading, error, searchBooks,  addToWishlist ,removeFromWishlist, fetchWishlist};
};
