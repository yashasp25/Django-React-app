// write a axios interceptor which it will check if it has any access token 
import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

//import anything inside from environment 
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default api