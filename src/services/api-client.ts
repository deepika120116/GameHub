import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd63c6cf76daf42759efe7e8b612348e5'
    },
});