import { Image } from "./user.interface";

export interface Playlists {

  total: number;
  items: Playlist;
}

export interface Playlist {
  collaborative: boolean,
  description: string,
  href: string,
  id: string,
  images: Image[];
  name: string;
  owner: object;
  external_urls: object;
  tracks: object;
}


export interface Owner {
  display_name: string;
}

export interface External_Urls {
  spotify: string;
}

export interface Tracks {
  total: number;
}



//get current user's playlist per la documentazione
