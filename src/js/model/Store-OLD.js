import Movie from './Movie';

class Store{
  // Properties on Store
  movieDB = {}

  constructor(){
    
    if (!localStorage.getItem('movieDB')) {
      this._createTestData()
      // this.movieDB = this.loadFromLocalStorage()
      // console.log('MovieDB if EMPTY localstorage', this.movieDB)
    } else {
      // this.loadFromLocalStorage()
      // this.movieDB = JSON.parse(localStorage.getItem('movieDB'))
      // console.log('MovieDB', this.movieDB)
    }
  }

  _createTestData(){
    let testData = {
      tt0118694 : {
          Title : 'In the Mood for Love',
          Year : 2000,
          Genre : 'Romance, Drama',
          Plot : 'Two neighbors, a woman and a man, form a strong bond after both suspect extramarital activities of their spouses. However, they agree to keep their bond platonic so as not to commit similar wrongs.',
          Poster : 'https://m.media-amazon.com/images/M/MV5BYjVhMTE3YzEtOGEwYS00NjFmLWFjYzAtMGVjNjY3YWY4OTJhL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
          imdbID : 'tt0118694'
        },
      tt0096256 : {
          Title : 'They Live',
          Year : 1988,
          Genre : 'Action, Horror, Sci-Fi, Thriller',
          Plot : 'A drifter discovers a pair of sunglasses that allow him to wake up to the fact that aliens have taken over the Earth.',
          Poster : 'https://m.media-amazon.com/images/M/MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_SX300.jpg',
          imdbID : 'tt0096256'
        }
      }
    let keys = Object.keys(testData)

    // Add test data to Store.movieDB
    keys.forEach(key => {
      const movie = testData[key]
      this.movieDB[key] = new Movie(movie)
    });
    
    this.saveToLocalStorage()
  }

  addMovie(movie){
    /**
     * Make sure movieObject is right structure ELSE make it
     * Push new object on to array
     */

    //  Push new object on to this.movie.DB array
    this.movieDB.push(movie)
  }

  removeMovie(movie){
    /**
     * Check if movie exist
     * THEN remove it from store. 
     */
    // debug
    // console.log(`Removed movie with imdbID: ${movieID}`)
  }
  
  saveToLocalStorage(){
    console.log('Saving to localStorage', this.movieDB)
    // console.log('savetolocalstorage movieDB', this.movieDB)
    // console.log(JSON.stringify(this.movieDB))
    // localStorage.setItem('movieDB', JSON.stringify(this.movieDB))
    // localStorage.setItem('movieDB', JSON.stringify(movieDB))
  }

  loadFromLocalStorage(){
    return this.movieDB
  }
}

export let store = new Store();