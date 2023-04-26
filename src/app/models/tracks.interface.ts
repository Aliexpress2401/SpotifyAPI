export interface Tracks {
  market: string;
  limit: number;
  offset: number;

  total: number;
  items: [added_at: string, track: object];

}

// get user's saved tracks per la documentazione
