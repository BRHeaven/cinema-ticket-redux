import data from '../Data/data.json';
const stateData = {
    dataChair : data.array,
};
const dataReducer = ( state = stateData, action ) => {
    return {...state};
};
export default dataReducer;