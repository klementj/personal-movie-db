import MovieCardComponent from './MovieCardComponent'

export function createFavoriteView(store){
  let movieCardHTML = ''
  if (store) {
    const movies = Object.values(store.movieDB)
    movies.forEach(movie => {
      console.log(movie)
      movieCardHTML += new MovieCardComponent(movie).render()
    });
  } else {
    console.error('No store passed to createFavoriteView')
  }

  return `
    <!-- Favorite Movies -->
    <div class="container">
      <h2>Favorite Movies</h2>
    </div>

    <main>       
      <section class="col">  
        <div class="grey darken-4" id="sec">
          <div class="container">
            <div class="row" id="favoriteSection">
              ${movieCardHTML}
            </div>
          </div>
        </div>
      </section>
  `
}

export function addMovieToView(movie){
  return movieCardHTML = new MovieCardComponent(movie).render()
}
