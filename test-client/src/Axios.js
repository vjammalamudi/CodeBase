import axios from 'axios';


const oneinstanceaxios = axios.create({
    baseURL:"http://localhost:4300"
}) 

export default oneinstanceaxios;