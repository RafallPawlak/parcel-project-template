import axios from 'axios';
export { fetchTrending };

const baseURL = 'https://developers.themoviedb.org/3/trending/get-trending/';    

const API_KEY_V3 = 'bdba5342660bdd1dac5d09b885091a0c';


async function fetchTrending(page, query) {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=bdba5342660bdd1dac5d09b885091a0c&page=${page}`,);

    return response;
}

