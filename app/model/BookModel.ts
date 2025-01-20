import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type ImageLinks = {
    smallThumbnail: string;
    thumbnail: string;
  };
  
  export type PanelizationSummary = {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  
  export type ReadingModes = {
    text: boolean;
    image: boolean;
  };
  
  export type VolumeInfo = {
    title: string;
    authors:string[],
    publisher?: string;
    readingModes: ReadingModes;
    pageCount?: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks?: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    ratingsCount: number;
    canonicalVolumeLink: string;
    description: string;
    isWishlist: boolean;
  };
  
  export type Book = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
  };

  export type BookResponse = {
    kind: string;
    totalItems: number;
    items: Book[];
  };
  
  

export const transformApiDataToBook = (apiData: any): Book => {
    return {
      kind: apiData.kind,
      id: apiData.id,
      etag: apiData.etag,
      selfLink: apiData.selfLink,
      volumeInfo: {
          title: apiData.volumeInfo.title || "No Title",
          publisher: apiData.volumeInfo.publisher || "Unknown Publisher",
          readingModes: apiData.volumeInfo.readingModes,
          pageCount: apiData.volumeInfo.pageCount || 0,
          printType: apiData.volumeInfo.printType,
          maturityRating: apiData.volumeInfo.maturityRating,
          allowAnonLogging: apiData.volumeInfo.allowAnonLogging,
          contentVersion: apiData.volumeInfo.contentVersion,
          panelizationSummary: apiData.volumeInfo.panelizationSummary,
          imageLinks: apiData.volumeInfo.imageLinks,
          language: apiData.volumeInfo.language,
          previewLink: apiData.volumeInfo.previewLink,
          infoLink: apiData.volumeInfo.infoLink,
          canonicalVolumeLink: apiData.volumeInfo.canonicalVolumeLink,
          authors: apiData.volumeInfo.authors || [],
          ratingsCount: apiData.volumeInfo.ratingsCount || 0,
          description: apiData.volumeInfo.description || "-",
          isWishlist: apiData.volumeInfo.isWishlist || false
      },
    };
  };