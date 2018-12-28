import React from 'react';
import Nature1 from '../styles/Nature1.jpg';
import Nature2 from '../styles/Nature2.jpg';
import Nature3 from '../styles/Nature3.jpg';
const Nature =()=>{
    return(
        <div className='PhotoDiv'>
            <h1>Nature</h1>
            <img className='Photo' src={Nature1} alt=''/>
            <img className='Photo' src={Nature2} alt=''/>
            <img className='Photo' src={Nature3} alt=''/>
        </div>
    );
};
export default Nature;