import axios from "axios";

const api = axios.create({
    baseURL: "https://senatran.herokuapp.com",
});

export default api;
