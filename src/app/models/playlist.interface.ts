export interface Playlists {
  limit: number;
  offset: number;

  total: number;
  items: [ collaborative: boolean, description: string, href: string, id: string, images: [url: string, height: number, width: number], name: string, owner: object ];
}

//get current user's playlist per la documentazione
