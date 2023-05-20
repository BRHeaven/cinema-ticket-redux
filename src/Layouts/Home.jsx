import '../css/main.css';
import React from 'react';
import RowChair from './RowChair';
import { connect } from 'react-redux';
import { removeTicker } from '../Redux/Actions/userActions';
function Home(props) {
  const renderCart = () => {
    return props.selectCinema.cart.map((object, index) => {
      return <tr key={index}>
        <td>{object.chair}</td>
        <td>{object.type}</td>
        <td>{object.price.toLocaleString()}</td>
        <td><button onClick={() => {props.removeCinemaTicket(object)}}>X</button></td>
      </tr>
    });
  };
  const renderTotalPrice = () => {
    let array = props.selectCinema.cart;
    let price = 0;
    for ( let i = 0; i < array.length; i++ ) {
      price += array[i].price;
    };
    return price.toLocaleString();
  };
  return (
    <section className='hp'>
        <div className="r">
            <div className="c8">
              <div className="cc8">
                  <h1><span></span><p>screen</p></h1>
                  <RowChair/>
              </div>
              <div className='ts'>
                <ul>
                  <li><span className='tse'></span><p>eco</p></li>
                  <li><span className='tsn'></span><p>normal</p></li>
                  <li><span className='tsv'></span><p>vip</p></li>
                  <li><span className='tsac'></span><p>are choosing</p></li>
                  <li><span className='tscc'></span><p>can't choose</p></li>
                </ul>
              </div>
            </div>
            <div className='c4'>
              <table>
                <thead>
                  <tr>
                    <th>
                      <p>chair</p>
                    </th>
                    <th>
                      <p>class</p>
                    </th>
                    <th>
                      <p>price</p>
                    </th>
                    <th>
                      <p></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {renderCart()}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={2}></th>
                    <th>{renderTotalPrice()}</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
        </div>
    </section>
  )
};
const mapStateToProps = state => {
  return {
      selectCinema : state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      removeCinemaTicket : (ticket) => {
        dispatch(removeTicker(ticket));
      }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);