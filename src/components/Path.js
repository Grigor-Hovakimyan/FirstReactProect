import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sec3 from './Sec3';
import TextOne from './TextOne';
const Path = () => {
    return(
        <div >
            <Switch>
                <Route exact path='/' component={Sec3}/>
                <Route path='/:number' component={TextOne}/>
            </Switch>
        </div>
    );
};

export default Path;