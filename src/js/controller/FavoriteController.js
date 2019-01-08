import { store } from '../model/Store';
import { createFavoriteView, addMovieToView } from '../view/FavoriteView'

export function setupFavorite(){
  // Setup view and append to document
  const favoriteHTML = createFavoriteView(store)
  document.body.insertAdjacentHTML('beforeend', favoriteHTML)
  const favoriteSection = document.getElementById('favoriteSection')
  // Setup eventlisteners
  favoriteSection.addEventListener('click', (event) => {
    const clickedElement = event.target
    if (clickedElement.matches('a.favorite-movie-button')) {
      _removeMovie(clickedElement)
    }
  })
}

function _removeMovie(movieElement){
  const movieID = movieElement.getAttribute('data-id')
  movieElement.closest('article').remove()
  store.removeMovieFromStore(movieID)
}


export function addMovie(movie){
  const favoriteSection = document.getElementById('favoriteSection')
  // Create new movie card component 
  const movieHTML = addMovieToView(movie)
  // Append movieCard
  favoriteSection.insertAdjacentHTML('beforeend', movieHTML)
  // Call and change store
  store.addMovie(movie)
}
