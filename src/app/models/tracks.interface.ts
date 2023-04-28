import { Image } from "./user.interface";

export interface Tracks {
 
  total: number;
  items: Track[];

}

export interface Track {
  added_at: string;
  track: Info;
}

export interface Info {
  id: string;
  name: string;
  duration_ms: number;
  explicit: boolean;
  popularity: number;
  album: Album;
  artists: Artist[];

}

export interface Album {
  name: string;
  images: Image[];
}

export interface Artist {
  name: string;
}

// get user's saved tracks per la documentazione
