import axios from "axios";
import { createBrowserHistory } from "history";

const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_DEMO
})
const token = localStorage.getItem("token")
const history = createBrowserHistory()

/*-------example Instance--------*/

apiInstance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`
        config.headers['AUTH-SIGNATURE'] = 'abcdefg'
    }
    return config
})

apiInstance.interceptors.response.use(config => config, (err) => {
    if (err.response) {
        if (err.response.status === 401) {
            alert('Token has expired')
            localStorage.clear();
            history.push("/");
            window.location.reload();
        }
        else {
            alert(`error code: ${err.response.status} message: ${err.response.message}`)
        }
    }

    return Promise.reject(err)
})

export default apiInstance