import axios from 'axios';

const APP_ID = "48e5d3d0";
const APP_KEY = "4054818ba30ea37e96be733a18c6fc1b";


export const fetchData = async(search_string) => {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search_string}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        return response.data.hits;
    } catch (error) {
        
        return 0;
    }
}