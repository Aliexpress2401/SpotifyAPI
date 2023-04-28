import { Image } from "./user.interface";

export interface Episodes {

  total: number;
  items: Episode[];

}

export interface Episode {
  added_at: string;
  episode: Info;
}

export interface Info {
  name: string;
  description: string;
  duration_ms: number;
  id: string;
  images: Image[];
  language: string;
  release_date: string;
}



// get user's saved episodes per la documentazione
