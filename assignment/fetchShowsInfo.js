
export async function fetchShowsInfo(url) {
    try {
      const res = await fetch(url);
      let movieslist = await res.json();
      return movieslist.shows;
    } catch (err) {
      console.log(err);
    }
  }