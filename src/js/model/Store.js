class Store {
  store = {test : 'din mor'}
  constructor(storeName='movieDB', store = {}) {
    this.storeName = storeName
    this.store = store
    
    if (!localStorage.getItem(storeName)) {
      _createTestDate();
      saveToLocalStorage(store)
    }
    // console.log(store)
    _createTestDate()
    // return store
  }
}
export let store = new Store()

function getDefaultStore() {
  if (!store) {
    store = new Store()
    console.log('DefaultStore in getDefaultStore() if NO store', store)
  }
  console.log('DefaultStore in getDefaultStore() if store', store)
  return store
}

export function getMovie(key, store = getDefaultStore()) {
  // Find a movie in the store objekt
  return store
}

export function saveToLocalStorage(){
  
}

function _createTestDate(){
  store = {
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
}