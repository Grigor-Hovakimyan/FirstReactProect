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
            document.getElementById('natureLi').style.marginLeft='0%';
            document.getElementById('ab').style.marginLeft='-5%';
        }
        else {
            document.getElementById('navbarInput').style.display='none';
            document.getElementById('navbarUl').style.paddingLeft='10%';
            document.getElementById('natureLi').style.marginLeft='7%';
            document.getElementById('ab').style.marginLeft='0%';
        }
    }
    render() {
        return(
            <div>
                <ul id='navbarUl' className='navbarUl'>
                    <li ><Link className='blogTamplate' to='/'>Blog template</Link></li>
                    <li className='searchImg'><img onClick={this.inputVal} src={SearchImg} alt='Search Image'/></li>
                    <li ><input id='navbarInput' className='navbarInput' type='text'/></li>
                    <li id='ab' ><Link className='abCoCo' to='/about'> About</Link></li>
                    <li ><Link className='abCoCo' to='/cooperation'> Cooperation</Link></li>
                    <li ><Link className='abCoCo' to='/contact'> Contact</Link></li>
                    <li id='natureLi'><Link to='/nature'> Nature</Link></li>
                    <li><Link to='/people'> People</Link></li>
                    <li><Link to='/trips' >Trips</Link></li>
                    <li><Link to='/animals' >Animals</Link></li>
                    <li><Link to='/fashions'> Fashion</Link></li>
                    <li><Link to='/tech'> Tech</Link></li>
                    <li><Link to='last'> ...</Link></li>
                    <li>
                    </li>
                </ul>
            </div>
        );
    }
}
export default NavbarPage;

