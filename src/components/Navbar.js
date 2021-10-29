import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return(
            <div style={{display:"flex",alignItems:"center"}}>
               
                <Link to='/' style={{textDecoration:'none'}}> <h1>Movies99</h1></Link>
                <Link to='/favourites' style={{textDecoration:'none'}}><h4 style={{marginLeft:"20px"}}>Favourites</h4></Link>
                
            </div>
        )
    }
}