import React, { Component } from 'react';
import CarouselPage from './CarouselPage';
import Header from './Header';
import Layer from './Layer';

import Footer from './Footer';
import Path from './Path';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <Header/>
                <CarouselPage/>
                <Layer/>
                <Path/>
                <Layer/>
                <Footer/>


            </div>
        );
    }
}