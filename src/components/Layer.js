import React from 'react';
import { MDBRow, MDBCol, MDBCard, } from 'mdbreact';
import Layer3 from '../images/Layer 3.png';
import Layer4 from '../images/Layer 4.png';
import Trips from '../images/Trips.png';
import Tech from '../images/Tech.png';

const Layer = () => {
    return (
        <section className="text-center my-5">
            <MDBRow className='mbLayerOne'>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={Layer3}
                                className="img-fluid"
                                alt="Layer3"
                                width='360px'
            
                            />
                            <div className="stripe dark">
                                <img src={Trips} alt='Rectangle Red'/>
                            </div>
                        </div>
                        <div className='layer3-4'>
                            <p><b>History has remembered the kings and warriors, because they destroyed; art has remembered the people, because they created. </b></p>
                            <p><span className='data'> 9 Dectember 2018 |</span> <a className='johnDoe'>William Morris</a></p>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src={Layer4}
                                className="img-fluid"
                                alt="Layer4"
                                width='360px'

                            />
                            <div className="stripe dark">
                                {<img src={Tech} alt='Rectangle Black'/>}
                            </div>
                        </div>
                        <div className='layer3-4'>
                            <p><b>Just remember, you can not climb the ladder of success with your hands in your pockets.</b></p>
                            <p><span className='data'>9 Dectember 2018 | </span><a className='johnDoe'>William Morris</a></p>
                        </div>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </section>
    );
};

export default Layer;