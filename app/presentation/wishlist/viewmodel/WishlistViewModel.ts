// src/viewmodels/BookViewModel.ts
import { useState, useEffect } from 'react';
import BookRepository from '../../../repository/wishlist/WishlistRepository';

export const useWishlistViewModel = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


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

  // Add to wishlist
  const addToWishlist = async (bookId: string) => {
    setLoading(true);
    setError(null);
    try {
     // await BookRepository.addToWishlist(bookId);
      fetchWishlist(); // Refresh wishlist
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
      fetchWishlist(); // Refresh wishlist
    } catch (err) {
      setError('Failed to remove from wishlist');
    } finally {
      setLoading(false);
    }
  };

  return {
    wishlist,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    fetchWishlist
  };
};
