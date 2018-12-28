import React from 'react';
import Last1 from '../styles/...1.jpg';
import Last2 from '../styles/...2.jpg';
import Last3 from '../styles/...3.jpg';
const Last =()=>{
    return(
        <div className='PhotoDiv'>

            <h1>Last</h1>
            <img className='Photo' src={Last1} alt=''/>
            <img className='Photo' src={Last2} alt=''/>
            <img className='Photo' src={Last3} alt=''/>
        </div>
    );
};

export default Last;