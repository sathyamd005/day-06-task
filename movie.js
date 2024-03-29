// 1.creating an movie class using class constructor method
 
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these 
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
}
  //if rating is not mentioned
  setRating(rate){
    this.rating=rate;
  }
    getMovieDetails(){
        return(`The title of the movie is ${this.title} and the studio is ${this.studio} with the rating of ${this.rating}`)
    }
}
var mov1 = new Movie("KGF", "Annapurna");
let mov2 = new Movie("RRR", "gold", "5");
let mov3 = new Movie("Pushpa", "silver", "5");
let mov4 = new Movie("Radhe Shyam", "platinum");

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided
mov1.setRating("PG");
mov4.setRating("PG");
console.log(mov4.getMovieDetails());

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
const moviesArray = [
new Movie("Movie1","Studio1","PG"),
new Movie("Movie2","Studio2","PG-13"),
new Movie("Movie3","Studio3","R"),
];

  

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let CasinoRoyale=new Movie("Casino Royale","Eon Productions","PG13");
console.log(CasinoRoyale)
