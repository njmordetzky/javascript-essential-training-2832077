
class Book { constructor(title, author, genre, constructionMaterial, unique, starRating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.constructionMaterial = constructionMaterial;
    this.unique = unique;
    this.starRating = starRating;
    this.condition = "Excellent"
  }
  conditionChange(conditionUpdate) {
    this.condition = conditionUpdate;
  }
  starRatingChange(ratingUpdate) {
    this.starRating = ratingUpdate;
  }
}

export default Book;
