import React from 'react';
import Fashion1 from '../styles/Fashion1.jpg';
import Fashion2 from '../styles/Fashion2.jpg';
import Fashion3 from '../styles/Fashiom3.jpg';
const Fashion =()=>{
    return(
        <div className='PhotoDiv'>
            <h1>Fashions</h1>
            <img className='Photo' src={Fashion1} alt=''/>
            <img className='Photo' src={Fashion2} alt=''/>
            <img className='Photo' src={Fashion3} alt=''/>
        </div>
    );
};
export default Fashion;