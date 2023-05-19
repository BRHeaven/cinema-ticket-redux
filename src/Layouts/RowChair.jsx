import React from 'react'
import { connect } from 'react-redux';

function RowChair(props) {
    const renderRowChair = (array) => {
        return array.map((object, index) => {
            return (
                <div className='irc' key={index}>
                    <div className='ro'><p>{object.row}</p></div>
                    <div className='rc'>{renderChair(object.rowChair)}</div>
                </div>
            );
        });
    };
    const renderChair = (array) => {
        return array.map((object, index) => {
            return <div className='b' key={index}><button onClick={() => {}} className={object.color}>{object.chair}</button></div>
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
        selectCinemaTicket : (flag, object) => {
            let action = {
                type : "selectCinemaTicket",
                flag,
                object
            };
            dispatch(action);
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(RowChair);