import axios from "axios"

const url = "https://6317a92eece2736550b8b7b8.mockapi.io/"

const call = (path, params) => {
    return axios.get(url + path, params ? {params} : '')
}

export default call;
