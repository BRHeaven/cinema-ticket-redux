import data from '../Data/data.json';
const stateData = {
    data : data,
};
const dataReducer = ( state = stateData, action ) => {
    return {...state};
};
export default dataReducer;