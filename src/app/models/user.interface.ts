export interface User {

  images: Image [];
  country: string;
  display_name: string;
  email: string;
  id: string;
  external_urls: object;
  followers: Followers;
  product: string;
  uri: string;
  href: string;
}



export interface Image {
  url: string;
  height: number;
  width: number;
}


export interface Followers {
  total: number;
}



//get current user's profile dalla documentazione
