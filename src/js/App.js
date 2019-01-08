import { setupFavorite } from './controller/FavoriteController'
import { setupSearch } from './controller/SearchController';
import { store } from './model/Store-OLD';

// import { store } from './model/Store';
// import Store from './model/Store';

class App{
  constructor() {
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
     * setup of view and eventlisteners
     */
    setupSearch()

    /** 
     * FAVORITE SECTION
     * setup of view and eventlisteners
    */
    setupFavorite()

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

    // Eventlistener that saves to localStorage when the window is unloaded.
    // window.addEventListener('beforeunload', store.saveToLocalStorage())
    
    
    // debug
    console.log('loadFromLocalStorage in App.js', store.loadFromLocalStorage())
  }
}

// Start at new app instance when document content is loaded
document.addEventListener('DOMContentLoaded', () => new App())