class Desk { 
  constructor(
    constructionMaterial,
    finish,
    color,
    height,
    width,
    numberOfDrawers
  ) {
    this.constructionMaterial = constructionMaterial;
    this.finish = finish;
    this.color = color;
    this.height = height;
    this.width = width;
    this.numberOfDrawers = numberOfDrawers
  }
  paintDesk(newColor) {
    this.color = newColor;
  }
}

export default Desk;