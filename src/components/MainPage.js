import React from 'react';

import LayerText from './LayerText';
import { Switch, Route } from 'react-router-dom';
import LayerTwo from './LayerTwo';




const MainPage =()=>(
    <section>
        <Switch>
            <Route exact path='/' component={LayerTwo}/>
            <Route path='/image:number' component={LayerText}/>
            <Route path='/about' component={LayerTwo}/>
            <Route path='/cooperation' component={LayerTwo}/>
            <Route path='/contact' component={LayerTwo}/>
            <Route path='/nature' component={LayerTwo}/>
            <Route path='/people' component={LayerTwo}/>
            <Route path='/trips' component={LayerTwo}/>
            <Route path='/animals' component={LayerTwo}/>
            <Route path='/fashions' component={LayerTwo}/>
            <Route path='/tech' component={LayerTwo}/>
            <Route path='/last' component={LayerTwo}/>
        </Switch>
    </section>
);


export default MainPage;