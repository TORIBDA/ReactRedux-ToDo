import axios from "axios";

const ConstantAPIs = axios.create({
    baseURL: "http://localhost:8090/"
});

export default ConstantAPIs;

//baseURL: "http://localhost:8090/"
//baseURL: "https://611cc220a18e850017decc45.mockapi.io/"