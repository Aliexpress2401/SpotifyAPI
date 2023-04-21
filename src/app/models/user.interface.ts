export interface User {

  country: string;
  display_name: string;
  email: string;
  id: string;
  external_urls: object;
  followers: [href: string, total: number]; //sistemarlo
  product: string;
  uri: string;
}

//get current user's profile dalla documentazione
