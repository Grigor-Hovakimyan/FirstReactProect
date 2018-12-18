import React from 'react';
import { Card, CardBody, CardImage, CardText, Col } from 'mdbreact';
import Road2 from '../Road1.jpg';
import RectangleRed from '../RectangleRed.png';
import LayerThree from './LayerThree';

class LayerTwo extends React.Component {
    render() {
        return (
            <Col >
                <Card className='layerTwoImg' >
                    <CardImage
                        className="layerTwoImage"
                        src={Road2}
                        alt='Road'

                    />
                    <CardBody className='layerTwoText'>
                        <CardText className='imageText layerTwoText2'>
                            <h3 className='layerTwoText1'>“Difficult roads often lead to beautiful destinations. The best is yet to come.”</h3>
                        </CardText>
                        <CardText className='dark'>
                            <img src={RectangleRed} alt='Rectangle Red'/>
                        </CardText>
                        <CardText className='rightImageText layerTwoRightText'>
                            <p><span className='data'> 11 Dectember 2018 |</span> <a className='johnDoe'>Zig Ziglar</a></p>
                        </CardText>
                    </CardBody>
                </Card><LayerThree/>
            </Col>
        );
    }
}

export default LayerTwo;