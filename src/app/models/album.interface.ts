export interface Albums {
  limit: number;
  offset: number;
  market: string;

  total: number;
  items: [added_at: string, album: object];

  
}

//get User's Saved Album per la documentazione
