var fs = require('fs');
var str = `
export const environment = {
    production: true,
    client_id: '${process.env.CLIENT_ID}',
    client_secret: '${process.env.CLIENT_SECRET}',
    redirect_uri: '${process.env.REDIRECT_URI}/login',
    authorization_uri: 'https://accounts.spotify.com/authorize',
    access_token_uri: 'https://accounts.spotify.com/api/token',
    scope: 'user-read-private user-read-email user-library-read user-read-playback-position playlist-read-private playlist-read-collaborative '
};
`;
fs.writeFile("./src/environments/environment.prod.ts", str, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});


