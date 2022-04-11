/**
 * file: storeReducer.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-28-2022
 * last-modified: April-11-2022
 */

import { combineReducers } from 'redux';

/** Initialize variables */
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

/**
 * storeReducer  
 * Purpose: To set the state of changed values
 * 
 * Parameter(s):
 * <1> state: Initial state of all parameters
 * <2> action: based on various actions performed on various components
 * 
 * Preconditions(s):
 * <1> INITIAL_STATE must be initialized 
 * 
 * Return(S): return changed values after every changed actions
 * 
 * Side effect(s): N/A
 */
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