import React, {Component} from 'react';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='footer'>
                <div className='inputs'>
                    <h1>Newsletter</h1>
                    <p>Sign up</p>
                    <form name='sub'>
                        <input type='email' name='sub'/>
                        <input  name='sub' type='submit' value='Sign up'/>
                    </form>
                </div>

                <div className='footerText'>
                    <p>This is my new footer text =D</p>
                </div>
            </div>
        );
    }
}

export default Footer;