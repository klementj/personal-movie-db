import MovieCardComponent from './MovieCardComponent'

export function createFavoriteView(store){
  let movieCardHTML = ''
  if (store) {
    store.movieDB.forEach(movieObject => {
      movieCardHTML += new MovieCardComponent(movieObject).render()
    })
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