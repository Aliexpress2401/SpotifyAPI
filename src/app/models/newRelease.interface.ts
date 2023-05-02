export interface TopSong {

  total: number;
  items: Song[];
}

export interface Song {
  name: string;
  artists: Artist;
}

export interface Artist {
  name: string;
}

// get top 5 tracks per la documentazione
