import axios from 'axios'
import * as bluebird from 'bluebird'
import { request } from 'http';

//REQUEST

export function requestEndpoint(url) {
    console.log("What is the url here: ", url)
    return {
        type: "REQUEST_ENDPOINT",
        payload: url
    }
}

//RECEIVE

export function endpointIsRead(url, json) {
    console.log("What is the json here: ", json)
    return {
        type: "DATA_READ",
        payload: {url, json}
    }
}

//FETCH

//Uses fetch
/* export function fetchData(url){
    return function(dispatch){
        dispatch(requestEndpoint(url));

        fetch(url)
        .then(response => response.json())
        .then(json=>{
            dispatch(endpointIsRead(url, json));
            console.log(JSON.stringify(json));
        })
    }
} */

//Uses AXIOS
 export function fetchData(url){
    return function(dispatch){
        dispatch(requestEndpoint(url));

        axios.get(url)
        .then(response =>{
            dispatch(endpointIsRead(url, response.data));
            console.log(response.data);
        })
    }
} 


//Look at : https://nodesource.com/blog/enterprise-grade-node-js-promises-with-async-and-bluebird/
//Uses Bluebird
/* export function fetchData(url){
    return function(dispatch){
        dispatch(requestEndpoint(url));

        request.get(url)
        .then(response => response.json())
        .then(json=>{
            dispatch(endpointIsRead(url, json));
            console.log(JSON.stringify(json));
        })
    }
}
 */
//Uses async/await