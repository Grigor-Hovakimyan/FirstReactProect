import React,{Component} from 'react';
import SearchImg from '../SearchImg.png';
import { Link } from 'react-router-dom';
class NavbarPage extends Component{
    constructor(props){
        super(props);
        this.state={
            input:true
        };
        this.inputVal=this.inputVal.bind(this);
        this.inputText=this.inputText.bind(this);
    }
    inputVal(){
        this.setState({input:!this.state.input});
        this.inputText();
    }
    inputText(){
        if (this.state.input){
            document.getElementById('navbarInput').style.display='block';
            document.getElementById('navbarUl').style.paddingLeft='1%';
        }
        else {
            document.getElementById('navbarInput').style.display='none';
            document.getElementById('navbarUl').style.paddingLeft='10%';
        }
    }
    render() {
        return(
            <div>
                <ul id='navbarUl' className='navbarUl'>
                    <li className='blogTamplate'>Blog template</li>
                    <li className='searchImg'><img onClick={this.inputVal} src={SearchImg} alt='Search Image'/></li>
                    <li ><input id='navbarInput' className='navbarInput' type='text'/></li>
                    <li id='abcoco' className='abCoCo'><Link to='/about'> About</Link></li>
                    <li id='abcoco' className='abCoCo'><Link to='/cooperation'> Cooperation</Link></li>
                    <li id='abcoco' className='abCoCo'><Link to='/contact'> Contact</Link></li>
                    <li>Nature</li>
                    <li>People</li>
                    <li>Trips</li>
                    <li>Animals</li>
                    <li>Fashion</li>
                    <li>Tech</li>
                    <li>...</li>
                    <li>
                    </li>
                </ul>
            </div>
        );
    }
}
export default NavbarPage;

