import React,{Component} from 'react';
import api from './api';
import { Link } from 'react-router-dom';

class LayerTwo extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='wrap'>
                {api.all().map((item,index)=>(
                    <Link key={index} to={`/${item.number}`}>
                        <div key={index}>
                            <img className='layerImg' width='250px' src={item.img_1} alt='img'/>
                            <img className='stripe' src={item.img_2} alt='img'/>
                            <p>{item.text}</p>
                            <p>{item.data}</p>
                        </div></Link>
                ) )
                }
            </div>
        );
    }
}
export default LayerTwo;