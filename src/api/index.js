import axios from "axios";
const main_url = axios.create({
baseURL: "https://dummyjson.com", 

});

export default main_url;