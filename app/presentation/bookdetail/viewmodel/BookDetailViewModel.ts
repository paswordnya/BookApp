// src/viewmodels/BookViewModel.ts
import { useState } from 'react';
import BookRepository from '../../../repository/wishlist/WishlistRepository';
import { Book } from '../../../model/BookModel';

export const useBookDetailViewModel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  return {
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
  };
};
