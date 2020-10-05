import React from 'react'
import { createStore} from 'redux'

const initialState = {
    name: 'Вася',
    age: 1
}
function reducer (state, action) {
    console.log(state)
    console.log(action)
}
const store = createStore(reducer);

const changeName = {
    type: 'CHANGE_NAME',
    payload: 'Барсик'
}
const changeAge = {
    type: 'CHANGE_AGE',
    payload: 2
}
store.dispatch(changeAge)