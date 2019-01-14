// Create secret.js which exports an object with your private key
// REMEMBER TO ADD SECRET.JS TO .gitignore!!!!
import { secret } from './secret'

const URI = 'http://www.omdbapi.com/',
      KEY = secret.KEY

export function searchMovie(movieTitle){
  const URL = URI
            + `?`
            + `s='${movieTitle}'`
            + `&apikey=${KEY}`
            // debug
            console.log('searchMovie URL:', URL)

    return fetch(URL)
      .then( response => response.json())
      .catch( error => console.error(error))
} 

export function getMovieFromID(imdbID){
  try {
    const URL = URI
              + `?`
              + `i=${imdbID}`
              + `&apikey=${KEY}`
              // debug
              console.log('getMovie URL:', URL)

    return fetch(URL)
      .then( response => {
        response.json()
      }).catch( error => {
        console.log('promise error:', error)
      })

  } catch (error) {
    console.log(error)
  }
}