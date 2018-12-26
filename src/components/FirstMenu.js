
import React,{Component} from 'react';
import Layer2 from '../images/Layer2.png';

class FirstMenu extends Component{
    constructor() {
        super();
        this.state = {
            key: true
        };
        this.change=this.change.bind(this);
    }
    change(){
        this.setState({
            key:!this.state.key});
        this.change1();
    }
    change1(){
        if(!this.state.key){
            document.getElementById('input').style.display='block';
            document.getElementById('nav').style.display='flex';

        }else{
            document.getElementById('input').style.display='none';
            document.getElementById('nav').style.display='block';
        }

    }




    render(){
        return(
            <div id='nav'><input id='input' type='text' placeholder='Search'/>
                <ul>
                    <li> <img onClick={this.change} src={Layer2}/></li>
                    <li>About</li>
                    <li>Cooperation</li>
                    <li>Contact</li>
                    <ul className='second'>
                        <li className='secondMenu'>Nature</li>
                        <li className='secondMenu'>People</li>
                        <li className='secondMenu'>Trips</li>
                        <li className='secondMenu'>Animals</li>
                        <li className='secondMenu'>Fashion</li>
                        <li className='secondMenu'>Tech</li>
                        <li className='secondMenu'>...</li>
                    </ul>
                </ul>
            </div>);
    }
}
export default FirstMenu;