import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Slide from './Slide';
import About from './About';
import Cooperation from './Cooperation';
import Contact from './Contakt';
import Nature from './Nature';
import People from './People';
import Trips from './Trips';
import Animals from './Animals';
import Fashion from './Fashion';
import Last from './Last';
import Tech from './Tech';
class NavbarText extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Slide}/>
                    <Route path='/about' component={About}/>
                    <Route path='/cooperation' component={Cooperation}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/nature' component={Nature}/>
                    <Route path='/people' component={People}/>
                    <Route path='/trips' component={Trips}/>
                    <Route path='/animals' component={Animals}/>
                    <Route path='/fashions' component={Fashion}/>
                    <Route path='/tech' component={Tech}/>
                    <Route path='/last' component={Last}/>

                </Switch>
            </div>
        );
    }
}
export default NavbarText;