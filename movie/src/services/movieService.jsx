import axios from "axios";
import { FormCheck } from "react-bootstrap";
const USERS_REST_API_URL = 'http://localhost:2024/api/v1/customers';
const baseURL = 'http://localhost:2024/api/v1';
class movieService{
    getMovies(){
        return axios.get(USERS_REST_API_URL);
    }
    getMovieById(movieId){
        return axios.get(baseURL  + '/admin/getById/' + customerId );
    }
    
    updateMovie(movie){
        return axios.put(baseURL +'/'+'customer',customer);
    }
    
}

export default new movieService();
