import House from "../Models/House.js";
import store from "../store.js";



// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
});

class HouseService {
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
  constructor() {

  }
}

const service = new HouseService();
export default service;