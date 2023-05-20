import React from 'react'
import { connect } from 'react-redux';
import { selectTicket } from '../Redux/Actions/userActions';

function RowChair(props) {
    const renderRowChair = (array) => {
        return array.map((object, index) => {
            return (
                <div className='irc' key={index}>
                    <div className='ro'><p>{object.row}</p></div>
                    <div className='rc'>{renderChair(object)}</div>
                </div>
            );
        });
    };
    const renderChair = (array) => {
        let row = array.row;
        return array.rowChair.map((object, index) => {
            return <div className='b' key={index}><button onClick={() => {props.selectCinemaTicket(row,object)}} className={object.color}>{object.chair}</button></div>
        });
    };
    return (
    <div className='lrc'>
        {renderRowChair(props.dataRowChair.data.dataChair)}
    </div>
    );
}
const mapStateToProps = state => {
    return {
        dataRowChair : state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectCinemaTicket : (row ,object) => {
            dispatch(selectTicket(row,object));
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(RowChair);