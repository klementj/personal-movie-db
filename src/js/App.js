import FavoriteController from './controller/FavoriteController'
import { store } from './model/Store-OLD';
// import Store from './model/Store';

class App{
  constructor() {
    // let foo = getMovie()
    // console.log(foo)
    /** 
     * HEADER
    */
    // Create headerHTML
    const headerHTML = `
      <div class="container">
        <header>
          <h1>Personal Movie DB</h1>     
        </header>  
      </div>
    `
    // Insert headerHTML in document
    document.body.insertAdjacentHTML('beforeend', headerHTML)


    /** 
     * SEARCH SECTION
    */
    // Create new SearchControllerController and call setupview() method


    /** 
     * FAVORITE SECTION
    */
    // Create new FavoritesController and call setupview() method
    FavoriteController.setupView()
    FavoriteController.setupEventListeners()

    /**
     * FOOTER
    */
    // Create footerHTML
    const footerHTML = `
        <!-- Footer -->
        </main>
        <footer>
          <p class="center-align">Personal Movie DB - %copy 2018 ligebanan</p>
        </footer>
      </div>
    `
    // Insert footerHTML in document
    document.body.insertAdjacentHTML('beforeend', footerHTML)

    let foo = store.loadFromLocalStorage()
    console.log('loadFromLocalStorage in App.js', foo)
    // Eventlistener that saves to localStorage when the window is unloaded.
    // window.addEventListener('beforeunload', (e) => store.saveToLocalStorage())
    window.addEventListener('beforeunload', store.saveToLocalStorage())
  }
}

// Start at new app instance when document content is loaded
document.addEventListener('DOMContentLoaded', (e) => new App())