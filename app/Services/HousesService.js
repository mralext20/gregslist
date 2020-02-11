import House from "../Models/House.js";
import store from "../store.js";



// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
});

class HouseService {
  deleteHouse(id) {
    _api
      .delete(id)
      .then(() => {
        let filteredHouses = store.State.houses.filter(h => h._id != id);
        store.commit("houses", filteredHouses);
      })
      .catch(error => {
        console.error(error);
      });
  }

  addHouse(newHouse) {
    _api.post("", newHouse).then(res => {
      let newApiHouse = new House(res.data.data);
      //NOTE Gets Houses from the state and adds additional car into new array
      let houses = [...store.State.houses, newApiHouse];
      store.commit("houses", houses);
    })
      .catch(error => {
        console.error(error);
      });
  }
  loadDataOnly() {
    _api
      .get("")
      .then(res => {
        let apihouses = res.data.data.map(c => new House(c));
        store.State.houses = apihouses
      })
      .catch(error => {
        console.error(error);
      });
  }

  editCar(id, update) {
    _api
      .put(id, update)
      .then(res => {
        let car = store.State.cars.find(c => c._id == id);
        //NOTE both these methods apply the changes to the original object
        //car = { ...car, ...update };
        for (let prop in update) {
          car[prop] = update[prop];
        }
        store.commit("cars", store.State.cars);
      })
      .catch(error => {
        console.error(error);
      });
  }
  constructor() {

  }
}

const service = new HouseService();
export default service;