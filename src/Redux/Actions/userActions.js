import { REMOVE_Ticket, SELECT_Ticket } from "../Types/userTypes"

export const selectTicket = (row,object) => {
    return {
        type : SELECT_Ticket,
        object,
        row
    }
}
export const removeTicker = (ticket) => {
    return {
        type : REMOVE_Ticket,
        ticket,
    };
};