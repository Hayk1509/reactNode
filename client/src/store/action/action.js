import { SELECT_RESTOURANT, SELECT_MAP_CENTER, SET_DATA, GET_SELECTED_RESTAURANTS,SET_ROUT_PATH } from "./actionType";
import axios from "axios"

export const selectedResourant = (item) => {
  return {
    type: SELECT_RESTOURANT,
    item
  };
}
export const selectMapCenter = (item) => {
  return {
    type: SELECT_MAP_CENTER,
    item
  };
}
const setRestaurantsList = (data) => {
  return {
    type: SET_DATA,
    data
  }
};

export const fetchAllRestourants = () => {
  let center = {
    lat: 19.955413,
    lng: 30.337844,
  }
  return function (dispatch) {
    return axios.get("http://localhost:5000/restaurants/restaurants")
      .then(({ data }) => {
        dispatch(setRestaurantsList(data));
        dispatch(selectMapCenter(data[0].location || center));
      });
  };
}
export const getSelectedRestaurant = (data) => {
  return {
    type: GET_SELECTED_RESTAURANTS,
    data
  }
};
export const setRoutePath = (path) => {
  return {
    type: SET_ROUT_PATH,
    path
  }
};

