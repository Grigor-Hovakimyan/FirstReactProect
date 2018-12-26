import React from 'react';


import FirstMenu from './FirstMenu';


const Header = () => {
    return (
        <header >
            <nav className='AllMenu'>
                <div className='blogTemplate'>
                    <h3>Blog template</h3>
                </div>
                <div className='menu'>
                    <FirstMenu/>  
                </div>
            </nav>
        </header>
    );
};

export default Header;