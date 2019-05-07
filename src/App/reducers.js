export function data(state={}, action){
    console.log("REDUCERS: ", state, action.payload)
    if(action.payload){
        console.log("Reducer value? ", action.payload)
    }

    switch (action.type){
        case "DATA_READ":
            return action.payload;
        case "REQUEST_ENDPOINT":
            return action.payload;
    
        default:
            return state;
    }
}