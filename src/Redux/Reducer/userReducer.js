/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import { REMOVE_Ticket, SELECT_Ticket } from "../Types/userTypes";
const stateUser = {
    cart : []
};
const userReducer = ( state = stateUser, action ) => {
    switch ( action.type ) {
        case SELECT_Ticket : {
            let updateReducer = state.cart;
            let index = updateReducer.findIndex(stateUser => stateUser.chair === action.object.chair);
            if ( index !== -1 ) {
                updateReducer.splice(index,1);
            } else {
                updateReducer.push(action.object);
            };
            state.stateUser = updateReducer;
            return {...state};
        }; break;
        case REMOVE_Ticket : {
            let updateReducer = state.cart;
            let index = updateReducer.findIndex(ticket => ticket.chair === action.ticket.chair);
            if ( index !== -1 ) {
                updateReducer.splice(index,1);
            } else {
                return {...state};
            }
            state.cart = updateReducer;
            return {...state};
        }; break;
        default: ;
    };
    return {...state};
};
export default userReducer;