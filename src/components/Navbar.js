import React,{Component} from 'react';
import axios from 'axios'

export default class Navbar extends Component{

    componentDidMount(){
      let responsePromise = axios.get("https://api.themoviedb.org/3/movie/550?api_key=1e81d15feb6defe86fdaaf8a23ee0405");

      responsePromise.then((res)=>{
         console.log(res.data)
      })
      .catch((err)=>console.log(err))
    }

    render(){
        return(
            <div style={{display:"flex",alignItems:"center"}}>
                <h1>Movies99</h1>
                <h4 style={{marginLeft:"20px"}}>Favourites</h4>
            </div>
        )
    }
}