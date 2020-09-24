/*
* Network Request 
* File performs HTTP request for GET, POST, UPDATE, DELETE methods that can be shared across our entire project.
*
*/
import axios from 'axios';
import { BASE_URL } from '_constants/Constants';

//Main method for network calls using axios
export const Network = (method, endpoint, data = {}) => {
  return fetch = new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      timeout: 1000 * 10 // Wait for 10 seconds
    }).then(response => {

      // handle success error here
      resolve(response)
    }).catch(err => {
      // handle  error here
      console.log(err)
      reject(err)
    });
  })
}
