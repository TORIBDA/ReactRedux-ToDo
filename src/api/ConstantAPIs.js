import axios from "axios";

const ConstantAPIs = axios.create({
    baseURL: "https://5d6f7991482b530014d2e376.mockapi.io/api"
});

export default ConstantAPIs;