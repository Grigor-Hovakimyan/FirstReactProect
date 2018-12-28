import React from 'react';
import Tech1 from '../styles/Tech1.jpg';
import Tech2 from '../styles/Tech2.jpg';
import Tech3 from '../styles/Tech3.jpg';
const Tech =()=>{
    return(
        <div className='PhotoDiv'>
            <h1>Tech</h1>
            <img className='Photo' src={Tech1} alt=''/>
            <img className='Photo' src={Tech2} alt=''/>
            <img className='Photo' src={Tech3} alt=''/>
        </div>
    );
};
export default Tech;