import React from 'react';
import People1 from '../styles/People1.jpg';
import People2 from '../styles/People2.jpg';
import People3 from '../styles/People3.jpg';
const People =()=>{
    return(
        <div className='PhotoDiv'>
            <h1>People</h1>
            <img className='Photo' src={People1} alt=''/>
            <img className='Photo' src={People2} alt=''/>
            <img className='Photo' src={People3} alt=''/>
        </div>
    );
};
export default People;