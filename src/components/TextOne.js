import React from 'react';
import api from './api';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const TextOne = props => {
    const  textOne=api.get(parseInt(props.match.params.number));
    if (!textOne){
        return <div>Image was not found</div>;
    }
    return (
        <div>
            <div className='bigImg'><img className='section-3'  src={textOne.img_1}/><div className='sec3Text'>
                <h1 className="h3-responsive">{textOne.text}</h1>
            </div>
            <div className='layer3-4ImageText'>
                <p className='blackData'>{textOne.data}</p>
            </div>
            </div>
            <p className='newText'>{textOne.text1}</p>
            <Link to='/'><button className='Back'>Back</button></Link>
        </div>
    );
};
TextOne.propTypes={
    match: PropTypes.object
};
export default TextOne;