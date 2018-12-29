import FavoriteView from '../view/FavoriteView'

export default class FavoriteController{

  /**
   * Load from store (Maybe pass store to favoriteview so no need to load store in favoriteView)
   * Call createView in FavoriteView (move html to favoriteview)
   * Setup (or call?) event listeners
   * ONLY CALL THIS SETUP
   */
  static setupView(){
    const movieCardHTML = new FavoriteView().populateWithMovies()
    const favoriteHTML = `
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
    document.body.insertAdjacentHTML('beforeend', favoriteHTML)
  }

  static setupEventListeners(){
    const favoriteSection = document.getElementById('favoriteSection')

    favoriteSection.addEventListener('click', (e) => {
      const clickedElement = e.target;
      // console.log(clickedElement)

      if (clickedElement.matches('a.favorite-movie-button')) {
        const movieID = clickedElement.getAttribute('data-id')
        
        // removeParrentArticle from DOMError
        clickedElement.closest('article').remove()
        // clickedElement.parentElement.parentElement.parentElement.parentElement.remove()
        console.log(`Removed movie with imdbID ${movieID} from favorite section`)

        // remove movie from Store

      }
    })
  }

  static addMovie(){
    const favoriteSection = document.getElementById('favoriteSection')
    // Create new movie card component and append
    document.body.insertAdjacentHTML('beforeend', favoriteSection)


    /**
     * Call add movie in favoriteView (everything that is seen)
     * Call and change the store
     */
  }

}
