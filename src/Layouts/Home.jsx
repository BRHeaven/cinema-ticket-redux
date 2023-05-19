import '../css/main.css';
import React from 'react';
import RowChair from './RowChair';
import { connect } from 'react-redux';
function Home() {
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
            <div className='c4'></div>
        </div>
    </section>
  )
};

export default connect(null,null)(Home);