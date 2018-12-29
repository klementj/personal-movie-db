export default class MovieCardComponent{
  constructor(movie){
    this.title = movie.Title
    this.poster = movie.Poster
    this.plot = movie.Plot
    this.year = movie.Year
    this.genre = movie.Genre
    this.id = movie.imdbID
  }

  render(){
    return `
      <article class="col s12 m5 l3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${this.poster}">
          </div>
          <div class="card-content">
            <span class="card-title activator white-text text-darken-4">${this.title}<i class="material-icons right">arrow_upward</i></span>
            <p>Year: ${this.year}<br>Genre: ${this.genre}</p>
            <p><a type="button" class="favorite-movie-button" data-id="${this.id}">${ this.fav === true ? `remove from fav` : `Remove` }</a></p>
          </div>
          <div class="card-reveal black">
            <span class="card-title white-text text-darken-4">${this.title}<i class="material-icons right">close</i></span>
            <p>${this.plot}</p>
          </div>
        </div>
    </article>
    `
  }
}