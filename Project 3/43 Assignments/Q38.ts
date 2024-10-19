// Album 

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist, title };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(make_album('Artist1', 'Album1'));
  console.log(make_album('Artist2', 'Album2', 10));
  console.log(make_album('Artist3', 'Album3'));
  