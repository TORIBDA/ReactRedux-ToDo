import axios from "axios";

const ConstantAPIs = axios.create({
    baseURL: "https://611cc220a18e850017decc45.mockapi.io/"
});

export default ConstantAPIs;