import React from 'react';
import Trips from '../images/Trips.png';
import LayerTwo from './LayerTwo';
import Layer11 from '../images/Layer 11.png';
const Sec3 = () => {
    return (
        <div>
            <div className='bigImg'><img className='section-3'  src={Layer11}/><div className='sec3Text'>
                <h1 className="h3-responsive">Proin congue elit fringilla</h1>
                <p>sodales tellus interdum fermentum nulla. Aliquam vitae arcu condimetntum, consectetur diam sed,ultrices urna</p></div><div className='stripe'>
                <img className='line' src={Trips} alt='img'/>
            </div>
            <div className='layer3-4ImageText'>
                <p><span className='data'> 9 Dectember 2018 |</span> <a className='johnDoe'>William Morris</a></p>
            </div>
            </div>
            <LayerTwo/>
        </div>
    );
};

export default Sec3;