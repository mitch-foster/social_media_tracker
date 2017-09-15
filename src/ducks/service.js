import axios from 'axios';


export default function getTwitterDataService(params) {
    return axios.get(`http://localhost:3333/api/twitterData/${params}`)
    .then(response=> response.data);
}