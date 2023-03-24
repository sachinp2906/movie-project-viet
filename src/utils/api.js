// this file is created to put base url inside it

import axios from 'axios';

// base url for the tmdb movies
const baseUrl = "https://api.themoviedb.org/3";


// token generated after registration in tmdb and it is stored in .env file
const tmdb_token = import.meta.env.VITE_APP_TOKEN_TMDB;

// using header to store the token (alternate approach : cookies)
const headers = {
    Authorization : "bearer " + tmdb_token
}

// function for data fetching using differnet end poings
export const fetchDataFromApi = async(url , params) => { // url is the end point of api , params is additional info about url
     try{
        // after fetching the details we are getting data as a key inside it so we are destructuring it.
    const {data} = await axios.get(baseUrl + url , {
        headers : headers,
        params : params
    })
    return data;
     }catch(err) {
        console.log(err);
        return err;
     }
}