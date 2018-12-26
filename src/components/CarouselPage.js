import React, { Component } from 'react';
import Layer8 from '../images/Layer 8.png';
import Layer9 from '../images/Layer 9.png';
import Layer10 from '../images/Layer 10.png';
import { Carousel, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';

class CarouselPage extends Component {
    render() {
        return (
            <Carousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1">
                <CarouselInner >
                    <CarouselItem itemId='1'>
                        <View>
                            <img className="d-block w-100" src={Layer8} alt="First slide" height='600px'/>
                            <Mask overlay="black-light" />
                        </View>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <View>
                            <img className="d-block w-100" src={Layer9} alt="Third slide" height='600px'/>
                            <Mask overlay="black-slight" />
                        </View>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <View>
                            <img className="d-block w-100" src={Layer10} alt="Mattonit's item" height='600px'/>
                            <Mask overlay="black-light" />
                        </View>
                    </CarouselItem>
                </CarouselInner>
            </Carousel>
        );
    }
}

export default CarouselPage;