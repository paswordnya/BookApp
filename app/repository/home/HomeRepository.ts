import { BookResponse } from "../../model/BookModel";
import axios from 'axios';

export class HomeRepository {
  async searchBooks(keyword: string): Promise<BookResponse> {
    console.log("Statuuus",   keyword);
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`, {
    timeout: 5000,
        headers: {
          'Accept': 'application/json',
        },
      });
    if (response.status === 200) {
       console.log(response.data);
      } else {
        console.log("Error with status:", response.status);
      }
    return response.data;
  }

  
}

