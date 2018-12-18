import './scss/styles.scss'
// import babel-polyfill for async function declearation and await operator
import 'babel-polyfill'
// Import JS files


// TEST til debug
import FavoriteController from './js/controller/FavoriteController'

new FavoriteController().setupView()

// let testMovie = {
//   title: 'test',
//   year: 1900,
// }

// import movieCard from './js/view/MovieCardComponent'

// let oneCard = new movieCard(testMovie).render()

// console.log(oneCard)

// import { store } from './js/model/Store'
// console.log(store)

// import FavoriteView from './js/view/FavoriteView'

// let bar = new FavoriteView().populateWithMovies()
// console.log(bar)

// APP START
// import favoriteController from './js/controller/FavoriteController'


