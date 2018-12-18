import FavoriteView from '../view/FavoriteView';

export default class FavoriteController{

  setupView(){
    let HTMlelement = document.getElementById('favoriteSection')
    let movieCardHTML = new FavoriteView().populateWithMovies()
    console.log(movieCardHTML)
    
    HTMlelement.insertAdjacentHTML('beforeend', movieCardHTML)
  }

}