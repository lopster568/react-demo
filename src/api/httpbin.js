import axios from "axios";

const binAPI = axios.create({
    baseURL: "https://httpbin.org",
});

export const postExample = async (data) => binAPI.post("/anything", data);