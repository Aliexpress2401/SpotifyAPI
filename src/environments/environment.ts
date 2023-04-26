export const environment = {
  production: false,

  client_id: '{{spotify_client_id}}',
  client_secret: '{{spotify_client_secret}}',
  redirect_uri: '{{redirect_uri}}/login',
  authorization_uri: 'https://accounts.spotify.com/authorize',
  access_token_uri: 'https://accounts.spotify.com/api/token',
  scope: 'user-read-private user-read-email user-library-read user-read-playback-position playlist-read-private playlist-read-collaborative '
};
