import Movie from './Movie';

class Store{
  // Properties on Store
  movieDB = {}

  constructor(){
    if (!localStorage.getItem('movieDB')) {
      this._createTestData()
      console.log('Created test data in Store constructor')
    } else {
      this.loadFromLocalStorage()
      console.log('Loaded movies from localStorage')
    }
  }

  _createTestData(){
    const testData = {
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
    const keys = Object.keys(testData)

    // Add test data to Store.movieDB
    keys.forEach(key => {
      const movie = testData[key]
      this.movieDB[key] = new Movie(movie)
    });

    this.saveToLocalStorage()
  }

  addMovieToStore(movie){
    this.movieDB[movie.id] = movie
    // debug
    console.log('store.movieDB after movie add', this.movieDB)
  }

  removeMovieFromStore(movieID){
    delete this.movieDB[movieID]
    this.saveToLocalStorage()
    // debug
    console.log(`Removed movie with imdbID ${movieID} from store.movieDB`)

  }
  
  saveToLocalStorage(){
    localStorage.setItem('movieDB', JSON.stringify(this.movieDB))
    // debug
    console.log('Saving to localStorage', this.movieDB)
  }

  loadFromLocalStorage(){
    // const keys = Object.keys()
    this.movieDB = JSON.parse(localStorage['movieDB'])
  }
}

export let store = new Store();
