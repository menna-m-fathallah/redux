// create action creater add
export const addOrder = (order) => {
    // return action 
    return {
        type: "ADD_ORDER",
        payload: order
    }
}

// create action creater remove
export const removeOrder = (order) => {
    // return action 
    return {
        type: "REMOVE_ORDER",
        payload: order
    }

}

