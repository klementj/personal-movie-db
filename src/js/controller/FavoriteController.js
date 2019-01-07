import { store } from '../model/Store-OLD';
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
      console.log(clickedElement.dataset)
      // Can also use clickedElement.dataset
      // Performance:
      // https://jsperf.com/data-dataset
      const movieID = clickedElement.getAttribute('data-id')
      clickedElement.closest('article').remove()
      console.log(`Removed movie with imdbID ${movieID} from favorite section`)
    }
  })
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
