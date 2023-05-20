/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import data from '../../Data/data.json';
import { REMOVE_Ticket, SELECT_Ticket } from '../Types/userTypes';

const stateData = {
    dataChair : data.array,
};
const dataReducer = ( state = stateData, action ) => {
    switch ( action.type ) {
        case SELECT_Ticket: {
            let updateReducer = state.dataChair;
            let indexRow = -1;
            for ( let i = 0 ; i < updateReducer.length; i++ ) {
                if ( updateReducer[i].row === action.row ) {
                    indexRow = i;
                };
            };
            let indexCol = updateReducer[indexRow].rowChair.findIndex( object => object.chair === action.object.chair);
            if ( indexCol !== -1 ) {
                let color = updateReducer[indexRow].rowChair[indexCol].color;
                let type = updateReducer[indexRow].rowChair[indexCol].type;
                if (color === "tse" && type === "eco") {
                    updateReducer[indexRow].rowChair[indexCol].color = "tsac";
                } else if ( color === "tsac" && type === "eco") {
                    updateReducer[indexRow].rowChair[indexCol].color = "tse";
                } else if ( color === "tsn" && type === "normal" ) {
                    updateReducer[indexRow].rowChair[indexCol].color = "tsac";
                } else if ( color === "tsac" && type === "normal" ) {
                    updateReducer[indexRow].rowChair[indexCol].color = "tsn";
                } else if ( color === "tsv" && type === "vip" ) {
                    updateReducer[indexRow].rowChair[indexCol].color = "tsac";
                } else if ( color === "tsac" && type === "vip" ) {
                    updateReducer[indexRow].rowChair[indexCol].color = "tsv";
                }
            } else {
                return {...state};
            };
            state.dataChair = updateReducer;
            return {...state};
        }; break;
        case REMOVE_Ticket : {
            let updateReducer = state.dataChair;
            for ( let i = 0; i < updateReducer.length; i++ ) {
                for ( let j = 0 ; j < updateReducer[i].rowChair.length; j++ ) {
                    let object = updateReducer[i].rowChair[j];
                    if (updateReducer[i].rowChair[j].chair === action.ticket.chair) {
                        if ( object.type === "eco" ) {
                            object.color = "tse";
                            updateReducer[i].rowChair[j] = object;
                            state.dataChair = updateReducer;
                            return {...state};
                        } else if ( object.type === "normal"){
                            object.color = "tsn";
                            updateReducer[i].rowChair[j] = object;
                            state.dataChair = updateReducer;
                            return {...state};
                        } else if ( object.type === "vip"){
                            object.color = "tsv";
                            updateReducer[i].rowChair[j] = object;
                            state.dataChair = updateReducer;
                            return {...state};
                        } else {
                            break;
                        };
                    };
                };
            };
            state.dataChair = updateReducer;
            return {...state};
        }; break;
        default: ;
    };
    return {...state};
};
export default dataReducer;