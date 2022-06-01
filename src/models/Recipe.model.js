export class Recipe {
  id;
  title;
  image;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
  }

  fromArray(data) {
    return data.map(d => new Recipe(d));
  }
}
