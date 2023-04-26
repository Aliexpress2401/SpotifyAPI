export interface Podcast {
  market: string;
  limit: number;
  offset: number;

  total: number;
  items: [added_at: string, episode: object];

}

// get user's saved episodes per la documentazione
