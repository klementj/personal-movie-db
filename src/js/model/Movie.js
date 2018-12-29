export default class Movie{
  constructor(movie){
    this.title = movie.Title
    this.year = movie.Year
    this.id = movie.imdbID
    this.poster = movie.Poster
    this.genre = movie.Genre
    this.plot = movie.Plot
  }
}