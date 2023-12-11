import { createStore } from "redux";

const initialState = {
    users: [],
    loggedinuser: null,
    products :
    [
        {
            id: 1,
            name: 'pen',
            price:3,
            
        },
        {
            id: 2,
            name: 'pencil',
            price:2,
            
        },
       
        {
            id: 3,
            name: 'eraser',
            price:5,
            
        },
       
       
    ],
    cart:[]
}

const reducer = (state =initialState,action) => {
    switch(action.type){
        case 'REGISTER' :
            return{
                ...state,
                users: [...state.users, action.payload]
            }
   

        default:
            return state;
    }
}
export default createStore(reducer)