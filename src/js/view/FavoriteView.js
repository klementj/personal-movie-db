import MovieCardComponent from './MovieCardComponent'
import { store } from '../model/Store-OLD'

export default class FavoriteView{
// Constructor kan eventuelt kalde en setupView metode.  Så der kun skal laves en ny FavoritView instans.
// Giver også mening i forhold til navngivningen og hvad den så gør. 
// Giver mindre mening ift. at filen bliver større og ikke i samme grad efterligner et moderne Front-end webapp framework.


  populateWithMovies(){

    let moviesString = ''
      
    console.log(store.movieDB)

    if (store) {
      store.movieDB.forEach(movieObject => {
        moviesString += new MovieCardComponent(movieObject).render()
      })
      return moviesString
    }
    
    console.error("MovieObject doesn't exist", store)  
  }

}