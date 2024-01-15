import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees= () => axios.get(REST_API_BASE_URL);

//richiesta di tipo post per poter creare un dipendente nel database
export const createEmployee =(employee) => axios.post(REST_API_BASE_URL,employee);   

