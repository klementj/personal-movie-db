import MovieCardComponent from './MovieCardComponent';
import {store} from '../model/Store';

export default class FavoriteView{

  populateWithMovies(){
    let moviesString = ''
    store.forEach(movieObject => {
      moviesString += new MovieCardComponent(movieObject).render()
    })
    return moviesString
  }

}