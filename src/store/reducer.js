import { createStore } from 'redux';
import {ADD_LOGIN_DETAILS} from './../store/AddLoginDetails'

const initialState = {
    usersDetails: [
        {
            username: "basanta",
            password: "password"
        }
    ],
}
const loginPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGIN_DETAILS:
            return {
                ...state,
                userDetails: action.data
            }
        default:
            return state;
    }
}
export default createStore(loginPage)
