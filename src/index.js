import './scss/styles.scss'
// import babel-polyfill for async function declearation and await operator
import 'babel-polyfill'
// Import JS files
import 'materialize-css'



import movieCard from './js/view/movieCard.js'

let movieObj = {
  title: 'repilicus',
  year: 1997,
  genre: 'romance',
}

console.log(new movieCard(movieObj).render())