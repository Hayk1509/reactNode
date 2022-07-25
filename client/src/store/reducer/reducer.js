import { SELECT_RESTOURANT, SELECT_MAP_CENTER, SET_DATA, GET_SELECTED_RESTAURANTS,SET_ROUT_PATH } from "../action/actionType";

const initialState = {
    restourant: [{
        id: 1,
        name: "Ararat",
        city: "Yerevan",
        img: "",
        rate: 3,
        location: {
            lat: 19.955413,
            lng: 30.337844,
        },
        desc: "Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. "
    },
    {
        id: 2,
        name: "Mariot",
        city: "Yerevan",
        img: "",
        rate: 1,
        location: {
            lat: 29.955413,
            lng: 30.337844,
        },
        desc: "Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. "
    }, {
        id: 3,
        name: "Mariot",
        city: "Yerevan",
        img: "",
        rate: 2,
        location: {
            lat: 49.955413,
            lng: 30.337844,
        },
        desc: "Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. "
    }, {
        id: 4,
        name: "Mariot",
        city: "Yerevan",
        img: "",
        rate: 3,
        location: {
            lat: 59.955413,
            lng: 30.337844,
        },
        desc: "Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. "
    }],
    center: {
        lat: 19.955413,
        lng: 30.337844,
    },
    selectedResourant: {
        id: 1,
        name: "Ararat",
        city: "Yerevan",
        img: "",
        rate: 3,
        location: {
            lat: 19.955413,
            lng: 30.337844,
        },
        desc: "Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile. "

    },
    path:"/"
}

const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_RESTOURANT:
            return { ...state, selectedResourant: action.item };
        case SELECT_MAP_CENTER:
            return { ...state, center: action.item };
        case SET_DATA:
            return { ...state, restourant: action.data };
        case GET_SELECTED_RESTAURANTS:
            return { ...state, selectedResourant: action.data };
        case SET_ROUT_PATH:
            return { ...state, path: action.path };
        default:
            return state;
    }
}

export default addReducer;
