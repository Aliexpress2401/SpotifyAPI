export interface User {

  image: [url: string, height: number, width: number];
  country: string;
  display_name: string;
  email: string;
  id: string;
  external_urls: object;
  followers: [total: number]; //sistemarlo
  product: string;
  uri: string;
  href: string;
}

//get current user's profile dalla documentazione
