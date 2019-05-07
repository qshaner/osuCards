/* export function readEndpoint(url){
    {fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(endpointAsJSON){
        console.log(JSON.stringify(endpointAsJSON));
        return JSON.stringify(endpointAsJSON);
    }).then(items => ( endpointIsRead(items)))
} 

}
 */
/* export function fetchData(url){
    return dispatch => {
        dispatch(readEndpoint(true))
        return fetch(url).then(response => response.json())
        .then(json => dispatch(endpointIsRead(json)))
    }
} */


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

export function fetchData(url){
    return function(dispatch){
        dispatch(requestEndpoint(url));

        fetch(url)
        .then(response => response.json())
        .then(json=>{
            dispatch(endpointIsRead(url, json));
            console.log(JSON.stringify(json));
        })
    }
}


 /* export function fetchData(url){
  return (dispatch) => {
      fetch(url)
      .then(res => res.json())
      .then( data => dispatch(endpointIsRead(data)))
      
  }    */
//   fetch(url)
//    .then(res=> res.json())
//    //.then(res=> console.log(JSON.stringify(res)))
//    .then(( data) => (endpointIsRead((data))))

   //console.log("DATA HERE: ", data)
    //return endpointIsRead(data)
//} 
/* 
export function endpointIsRead(data) {
    console.log("What is the data here: ", data)
    return {
        type: "GET_DATA",
        payload: data
    }
} */