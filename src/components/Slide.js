import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';

import Layer3 from '../Layer3.png';
import Layer4 from '../Layer4.png';
import Layer12 from '../Layer 12.png';
import LayerCopy from '../LayerCopy.png';
import William from '../William.jpg';
import Arnold from '../Arnold.jpg';
import RectangleBlue from '../RectangleBlue.png';
import RectangleRed from '../RectangleRed.png';
import RectangleBlack from '../RectangleBlack.png';

class Slide extends Component {
    render() {
        return (
            <Carousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1 headSlide">
                <CarouselInner>
                    <CarouselItem itemId="1">
                        <View>
                            <img className="d-block w-100" src={Layer12} alt="First slide" />
                            <Mask overlay="black-light" />
                        </View>
                        <CarouselCaption className='imageText'>
                            <img src={LayerCopy} alt='LayerCopy'/>
                            <h3 className="h3-responsive">“Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.”</h3>
                        </CarouselCaption>
                        <CarouselCaption className='leftImageText'>
                            <img src={RectangleBlue} alt='Rectangle Blue'/>
                        </CarouselCaption>
                        <CarouselCaption className='rightImageText'>
                            <p>9 Dectember 2018 | <a className='johnDoe'>John Doe</a></p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <View>
                            <img className="d-block w-100" src={Layer3} alt="Second slide" />
                            <Mask overlay="black-strong" />
                        </View>
                        <CarouselCaption className='imageText'>
                            <img className='williamImg' src={William} alt='William'/>
                            <h2 className="h3-responsive">History has remembered the kings and warriors, because they destroyed; art has remembered the people, because they created.</h2>
                        </CarouselCaption>
                        <CarouselCaption className='leftImageText'>
                            <img src={RectangleRed} alt='Rectangle Red'/>
                        </CarouselCaption>
                        <CarouselCaption className='rightImageText'>
                            <p>9 Dectember 2018 | <a className='johnDoe'>William Morris</a></p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <View>
                            <img className="d-block w-100" src={Layer4} alt="Third slide" />
                            <Mask overlay="black-slight" />
                        </View>
                        <CarouselCaption className='imageText'>
                            <img className='arnoldImg' src={Arnold} alt='Arnold'/>
                            <h4 className="arnoldText">Just remember, you can not climb the ladder of success with your hands in your pockets.</h4>
                        </CarouselCaption>
                        <CarouselCaption className='leftImageText'>
                            <img  src={RectangleBlack} alt='Rectangle Black'/>
                        </CarouselCaption>
                        <CarouselCaption className='rightImageText'>
                            <p>9 Dectember 2018 | <a className='johnDoe'>Arnold Schwarzenegger</a></p>
                        </CarouselCaption>
                    </CarouselItem>
                </CarouselInner>
            </Carousel>
        );
    }
}

export default Slide;
