import axios from "axios";

const ConstantAPIs = axios.create({
    baseURL: "https://611cc220a18e850017decc45.mockapi.io/"
});

export default ConstantAPIs;

//https://611cc220a18e850017decc45.mockapi.io/
//baseURL: "https://5d6f7991482b530014d2e376.mockapi.io/api"