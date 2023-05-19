/* eslint-disable no-lone-blocks */
const stateUser = [];
const userReducer = ( state = stateUser, action ) => {
    switch ( action.type ) {
        case "selectCinemaTicket" : {
            let updateReducer = {...state};
        }; break;
        default: ;
    };
    return {...state};
};
export default userReducer;