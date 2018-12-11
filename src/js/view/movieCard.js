
export default class movieCard {
  constructor(movie){
    this.title = movie.title || 'ingen titel'
    this.desciption = movie.desciption || 'beskrivelse er tom'
    this.poster = movie.poster || 'https://picsum.photos/200/300'
    this.year = movie.year || '1900'
    this.genre = movie.genre || 'Romance'
  }

  render(){
    return `<article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${this.poster}">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">${this.title}<i class="material-icons right">arrow_upward</i></span>
                  <p>Year: ${this.year}<br>Genre: ${this.genre}</p>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">${this.title}<i class="material-icons right">close</i></span>
                  <p>${this.desciption}</p>
                </div>
              </div>
            </article>`
  }
}