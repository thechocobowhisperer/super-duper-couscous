import React, {Component} from 'react';
import { Link } from 'react-router-dom'
 
class Main extends Component{
    state ={}

    render() {
        console.log(this.props)
        return(
            <h2><Link to='/about'>About</Link></h2>     
        );
    };
}
export default Main;