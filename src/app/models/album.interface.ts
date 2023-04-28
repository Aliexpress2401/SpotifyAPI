import { Image } from "./user.interface";

export interface Albums {

  total: number;
  items: Album[];
}

export interface Album {
  added_at: string;
  album: Info;
}

export interface Info {
  album_type: string;
  total_tracks: number;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  artists: Artist[];
  external_urls: object;

}

export interface Artist {
  name: string;
}

export interface External_Urls {
  spotify: string;
}


//get User's Saved Album per la documentazione
