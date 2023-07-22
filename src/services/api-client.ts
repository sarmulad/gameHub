import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"7970230ff2644fcbbd8a73a626a629a8"
    }
})