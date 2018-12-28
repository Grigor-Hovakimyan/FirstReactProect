import React from 'react';
import api from './api';
import PropTypes from 'prop-types';
import {Card, CardBody, CardImage, CardText, Col} from 'mdbreact';
import { Link } from 'react-router-dom';

const LayerText = props =>{

    const  layerText=api.get(parseInt(props.match.params.number));
    if (!layerText){
        return <div>Image was not found</div>;
    }
    return(
        <div className='layerText'>

            <Col >
                <Card className='layerTwoImg' >
                    <CardImage
                        className="layerTwoImage"
                        src={layerText.img}
                        alt='Road'

                    />
                    <CardBody className='layerTwoText'>
                        <CardText className='imageText layerTwoText2'>
                            <h3 className='layerTwoText1'>{layerText.text}</h3>
                        </CardText>
                        <CardText className='dark'>
                            <img src={layerText.rectangleImg} alt='Rectangle Red'/>
                        </CardText>
                        <CardText className='rightImageText layerTwoRightText'>
                            <p><span className='data'>{layerText.da}</span> <a className='johnDoe'>{layerText.author}</a></p>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>


            <h1 className='contentHead'>{layerText.contentHead}</h1>
            <h2 className='contentText'>{layerText.content}</h2>
            <Link to='/'>
                <button className="blue">
                BACK
                </button>
            </Link>
        </div>
    );

};
LayerText.propTypes={
    match: PropTypes.object
};
export default LayerText;