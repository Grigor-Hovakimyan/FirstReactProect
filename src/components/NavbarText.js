import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Cooperation from './Cooperation';
import Contact from './Contakt';
class NavbarText extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/cooperation' component={Cooperation}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        );
    }
}
export default NavbarText;