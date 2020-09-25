import { combineReducers } from 'redux';
const orderListReducer = (orderList = [], { type, payload }) => {
    if (type === 'ADD_ORDER') {
        const item = orderList.filter(item => item.id === payload.id)[0];
        if (item) {
            item.amount += 1;
            return [...orderList.filter(item => item.id !== payload.id), item]
        }
        else {
            payload.amount = 1;
            return [...orderList, payload]
        }
    }
    if (type === 'REMOVE_ORDER') {
        const item = orderList.filter(item => item.id === payload.id)[0];
        if (item) {
            if (item.amount >= 1) {
                item.amount -= 1;
                return [...orderList.filter(item => item.id !== payload.id), item]
            }
            else {
                return [...orderList.filter(item => item.id !== payload.id)]
            }
        }
        else {
            payload.amount = 0;
            return [...orderList, payload]
        }
    }
    return [...orderList]
}

const calcTotal = (total = 0, { type, payload }) => {
    if (type === 'ADD_ORDER') {
        return total + payload.price
    }
    if (type === 'REMOVE_ORDER') {
        return total - payload.price
    }
    return total;
}

const calcCount = (count = 0, { type }) => {
    if (type === 'ADD_ORDER') {
        return count = count + 1;
    }
    if (type === 'REMOVE_ORDER') {
        return count = count - 1;
    }
    return count;
}
const ourReducers = {
    orderList: orderListReducer,
    total: calcTotal,
    count: calcCount
}
export default combineReducers(ourReducers)
