import axios from "axios";

const tmdbAPI = axios.create({ baseURL: "https://api.themoviedb.org/3" });

tmdbAPI.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params["api_key"] = "4e44d9029b1270a757cddc766a1bcb63";
    return config;
})

export default tmdbAPI