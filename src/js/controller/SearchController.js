import { createSearchBar, createSearchSection, showSearchResults } from '../view/SearchView';
import { searchMovie } from '../model/API';

export function setupSearch(){
  const searchBar = createSearchBar()
  document.body.insertAdjacentHTML('beforeend', searchBar)
  
  const searchSection = createSearchSection()
  document.body.insertAdjacentHTML('beforeend', searchSection)
  /**
   * Call and setup view
   * Append view
   * Setup eventlisteners
   */
  const searchInput = document.getElementById('search_input')
  searchInput.addEventListener('keydown', (event) => {
    // If key is enter
    if (event.keyCode === 13) {
      searchMovie(searchInput.value)
        .then(response => {
          const searchSection = document.getElementById('searchSection')
          const searchResult = showSearchResults(response.Search)
          searchSection.innerHTML = searchResult
        })
    }
  })  
    
  // document.createElement('section')


  // const searchSection = `

  // `
}

// export function searchMovie(){
  /**
   * Get string from input -> sanitize
   * Create new request instance and send request to omDB
   * Create movie Object for each result -> Pass to searchView.
   * Render each movieComponents
   */
// }