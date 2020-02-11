import HousesService from "../Services/HousesService.js";
import store from "../store.js";

//Private
function _draw() {
  let houses = store.State.houses;
  let housesElem = document.getElementById("target");
  let template = "";

  houses.forEach(house => {
    template += house.Template;
  });

  housesElem.innerHTML = template;
}

//Public
export default class HouseController {
  constructor() {
    store.subscribe("houses", _draw);
    HousesService.loadDataOnly()
  }
  load() {
    _draw()
  }

  getAllHouses() {
    HousesService.getHouses();
  }

  addCar(event) {
    event.preventDefault();

    // NOTE formData is an alias for our submitted form from our html
    let formData = event.target;
    // NOTE newcar is an object with all the inputted values from our form
    let newHouse = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    };
    console.log(newHouse);
    HousesService.addHouse(newHOuse);
    formData.reset();
    // @ts-ignore
    $("#car-form").modal("toggle");
  }

  bid(id, price) {
    debugger;
    HousesService.editHouse(id, { price });
  }

  removeImg(id) {
    debugger;
    HousesService.editHouse(id, { imgUrl: "//placehold.it/200x200" });
  }

  delete(id) {
    HousesService.deleteHouse(id);
  }
}
