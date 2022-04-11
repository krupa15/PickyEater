/**
 * file: storeActions.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-28-2022
 * last-modified: April-11-2022
 */

/**
 * changeData
 * Purpose: To change the data based on search
 * 
 * Parameter(s):
 * <1> value: which stores parameters of changed data
 * 
 * Preconditions(s):
 * <1> Must be called from HomeScreen.js on valueChange
 * 
 * Return(S): N/A
 * 
 * Side effect(s): N/A
 */
export const changeData=(value)=>({
    type:"dataChange",
    payload:value
});

/**
 * changeSearchString
 * Purpose: To change the value of search string
 * 
 * Parameter(s):
 * <1> value: which stores changed string
 * 
 * Preconditions(s):
 * <1> Must be called from SearchComponent.js when string is changed
 * 
 * Return(S): N/A
 * 
 * Side effect(s): N/A
 */
export const changeSearchString=(value)=>({
    type:"searchChange",
    payload:value
});

/**
 * changeRecipe
 * Purpose: To store parameters from for HomeScreen.js to pass it to DetailScreen.js
 * 
 * Parameter(s):
 * <1> value: which stores parameters of clicked recipe
 * 
 * Preconditions(s):
 * <1> Must be called from HomeScreen.js when recipe is clicked
 * 
 * Return(S): N/A
 * 
 * Side effect(s): N/A
 */
export const changeRecipe=(value)=>({
    type:"recipeChange",
    payload:value
});

/**
 * changeFirst
 * Purpose: To change the value of firstLoad to false
 * 
 * Parameter(s):
 * <1> value: which has the value of firstLoad
 * 
 * Preconditions(s):
 * <1> Must be called from HomeScreen.js after splash screen loaded
 * 
 * Return(S): N/A
 * 
 * Side effect(s): Will not load splash screen again
 */
export const changeFirst=(value)=>({
    type:"firstChange",
    payload:value
});

/**
 * changeSelected
 * Purpose: To fetch the data based on click event on Healthlabels, Nutitions and ingredients 
 * 
 * Parameter(s):
 * <1> value: which stores value of 3 parameters
 * 
 * Preconditions(s):
 * <1> Must be called from DetailScreen.js on valueChange
 * 
 * Return(S): N/A
 * 
 * Side effect(s): Show the data based on values
 */
export const changeSelected=(value)=>({
    type:"selectedChange",
    payload:value
});

/**
 * changeUrl
 * Purpose: To change url of image to pass it from HomeScreen.js to DetailScreen.js
 * 
 * Parameter(s):
 * <1> value: which stores image url of clicked recipe
 * 
 * Preconditions(s):
 * <1> Must be called from HomeScreen.js when recipe is clicked
 * 
 * Return(S): N/A
 * 
 * Side effect(s): N/A
 */
export const changeUrl=(value)=>({
    type:"urlChange",
    payload:value
});