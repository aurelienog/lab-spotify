const spotifyApi  = require('../config/spotify.config');


module.exports.home = (req, res, next) => {
  res.render("home")
};

module.exports.search = (req, res, next) => {
  spotifyApi
    .searchArtists(req.query.search)
    .then(data => {
      res.render("artist-search-results", {
        artists : data.body.artists.items
    } )
      //console.log('The received data from the API: ', data.body.artists.items[0].images[0].url);
      // ----> 'HERE'S WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch(err => console.log('The error while searching artists occurred: ', err));
  
}
  
module.exports.albums = (req, res, next) => {
  spotifyApi
    .getArtistAlbums(req.params.id)
    .then(data => {
      res.render("albums", {
        albums: data.body.items
        
    } )
    console.log('The received data from the API: ', data.body.items[0].images)
    })
    .catch(err => console.log('The error while searching artists occurred: ', err));
  
}
  
module.exports.tracks = (req, res, next) => {
  spotifyApi
    .getAlbumTracks(req.params.idAlbum)
    .then(data => {
      res.render("tracks", {
        tracks : data.body.items
    } )
      //console.log('The received data from the API: ', data.body.items);
      // ----> 'HERE'S WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch(err => console.log('The error while searching artists occurred: ', err));
  
}
  
