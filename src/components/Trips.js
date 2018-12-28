import React from 'react';
import Trips1 from '../styles/Trips1.jpg';
import Trips2 from '../styles/Trips2.jpg';
import Trips3 from '../styles/Trips3.jpg';
const Trips =()=>{
    return(
        <div className='PhotoDiv'>
            <h1>Trips</h1>
            <img className='Photo' src={Trips1} alt=''/>
            <img className='Photo' src={Trips2} alt=''/>
            <img className='Photo' src={Trips3} alt=''/>
        </div>
    );
};
export default Trips;