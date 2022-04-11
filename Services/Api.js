/**
 * file: Api.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-28-2022
 * last-modified: April-11-2022
 */

import axios from 'axios';

const APP_ID = "48e5d3d0";
const APP_KEY = "4054818ba30ea37e96be733a18c6fc1b";

/**
 * fetchData
 * Purpose: To fetch the data from API
 * 
 * Parameter(s): N/A
 * 
 * Preconditions(s):
 * <1> axios must be installed
 * 
 * Return(S): data which are requested 
 * 
 * Side effect(s): N/A
 */
export const fetchData = async(search_string) => {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search_string}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        return response.data.hits;
    } catch (error) {
        
        return 0;
    }
}

/**
 * fetchRecipeData
 * Purpose: To fetch the data from API
 * 
 * Parameter(s): N/A
 * 
 * Preconditions(s):
 * <1> axios must be installed
 * 
 * Return(S): data which are requested 
 * 
 * Side effect(s): N/A
 */
export const fetchRecipeData = async(search_string) => {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${search_string}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`);
        return response.data;
    } catch (error) {
        
        return 0;
    }
}