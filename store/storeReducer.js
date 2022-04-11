import { combineReducers } from 'redux';

const INITIAL_STATE = {
    Data: {},
    searchString: "",
    selectedRecipieId: "",
    selectedData: {
        name: "",
        ingCount: "",
        totalCal: "",
        health: [{}],
        ing: [{}],
        nutri: [{}],
        img: ""
    },
    url: "",
    FirstLoad: true,
    selectedUrl: ""
};


const storeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'recipeChange':
            return { ...state, selectedRecipieId: action.payload }
        case 'dataChange':
            return { ...state, Data: action.payload }
        case 'searchChange':
            return { ...state, searchString: action.payload }
        case 'firstChange':
            return { ...state, FirstLoad: action.payload }
        case 'selectedChange':
            return { ...state, selectedData: action.payload }
        case 'urlChange':
            return { ...state, selectedUrl: action.payload }
        default:
            return state
    }
};

export default combineReducers({
    store: storeReducer
});