

export default class House {


  constructor(data) {
    this._id = data._id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.imgUrl = data.imgUrl;
    this.levels = data.levels;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
  }
  get Template() {
    return /*html*/`
    <div class="col-3">
    <div class="card">
    <img class="card-img-top" src="${
      this.imgUrl
      }" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">House</h5>
      <p class="card-text">${this.description} <b>$${
      this.price
      }</b></p>
      <p> bathrooms: ${this.bathrooms}</p>
      <p> levels: ${this.levels}</p>
      <p> bedrooms: ${this.bedrooms}</p>
      <p> year: ${this.year}</p>

      <button class="btn btn-info" onclick="app.housesController.bid('${
      this._id
      }', ${this.price + 5})">BID $500</button>
      <button class="btn btn-danger" onclick="app.housesController.delete('${
      this._id
      }')">DELETE</button>
    </div>
  </div>
    </div>
`;
  }
}