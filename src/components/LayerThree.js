import React from 'react';
import api from './api';
import { MDBRow, MDBCol, MDBCard, } from 'mdbreact';
import { Link } from 'react-router-dom';


const LayerThree = () => {
    return (<div>
        <section className="text-center my-5">
            <MDBRow className='mbLayerOne'>
                <MDBCol lg="3" md="6" className="mb-lg-0 layerThree ">
                    {api.all().map((el,index) =>(
                        <Link key={index} to={`/image${el.number}`}>
                            <MDBCard key={el.number}  collection className="z-depth-1-half">
                                <div className="view zoom">
                                    <img
                                        src={el.img}
                                        className="img-fluid lemon"
                                        alt="Layer3"
                                    />
                                    <div className="stripe dark">
                                        <img src={el.rectangleImg} alt='Rectangle Green'/>
                                    </div>
                                </div>
                                <div className='layer3-4ImageText'>
                                    <p className='lemonText'><b>{el.text}</b></p>
                                    <p><span className='data'>{el.data}</span> <a className='johnDoe'>{el.author}</a></p>
                                </div>
                            </MDBCard>
                        </Link>
                    ))}</MDBCol>
            </MDBRow>
        </section></div>
    );
};

export default LayerThree;