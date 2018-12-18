import React, { Component } from 'react';
import Slide from './Slide';
import LayerOne from './LayerOne';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import MainPage from './MainPage';
import NavbarText from './NavbarText';




export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <NavbarPage/>
                <Slide/>
                <NavbarText/>
                <LayerOne/>
                <MainPage/>
                <LayerOne/>
                <Footer/>
            </div>
        );
    }
}