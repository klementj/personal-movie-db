// Create secret.js which exports an object with your private key
// REMEMBER TO ADD SECRET.JS TO .gitignore!!!!
import { secret } from './secret'

const URI = 'http://www.omdbapi.com/',
      KEY = secret.KEY

export async function searchMovie(movieTitle){
  try {
    const URL = URI
              + `?`
              + `s=${movieTitle}`
              + `&apikey=${KEY}`
              // debug
              console.log('searchMovie URL:', URL)

     return await fetch(URL)
      .then(response => response.json())
      // .then(response => response)

  } catch (error) {
    console.error(error)
  }
} 

export async function getMovieFromID(imdbID){
  try {
    const URL = URI
              + `?`
              + `i=${imdbID}`
              + `&apikey=${KEY}`
              // debug
              console.log('getMovie URL:', URL)

    return await fetch(URL)
      .then( response => {
        response.json()
      }).catch( error => {
        console.log('promise error:', error)
      })

  } catch (error) {
    console.log(error)
  }
}