import axios from "axios";

const jsonplaceholderAPI = axios.create({baseURL: "https://jsonplaceholder.typicode.com"});

export default jsonplaceholderAPI