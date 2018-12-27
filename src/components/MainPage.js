import React from 'react';

import LayerText from './LayerText';
import { Switch, Route } from 'react-router-dom';
import LayerTwo from './LayerTwo';


const MainPage =()=>(
    <section>
        <Switch>
            <Route exact path='/' component={LayerTwo}/>
            <Route path='/image:number' component={LayerText}/>
        </Switch>
    </section>
);


export default MainPage;