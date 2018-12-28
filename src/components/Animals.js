import React from 'react';
import Animals1 from '../styles/Animals1.jpg';
import Animals2 from '../styles/Animals2.jpg';
import Animals3 from '../styles/Animals3.jpg';
const Animals =()=>{
    return(
        <div className='PhotoDiv'>
            <h1>Animals</h1>
            <img className='Photo' src={Animals1} alt=''/>
            <img className='Photo' src={Animals2} alt=''/>
            <img className='Photo' src={Animals3} alt=''/>
        </div>
    );
};
export default Animals;