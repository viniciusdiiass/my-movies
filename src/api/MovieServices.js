import axios from "axios";

const API_KEY = '04e57fafa1bdbbef2ab406ceed85fb99';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl(`/movie/popular`));
    }

    static getMoviesById(id){
        return axios(withBaseUrl(`/movie/${id}`))
    }
}