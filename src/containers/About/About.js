import React, {Component} from 'react';
 
class About extends Component{
    state ={}
    redirectFunction = ()  => {
        this.props.history.push('/')
    }
    render() {
        return(
         <h2 onClick={this.redirectFunction}>Change Me About</h2>     
        );
    };
}
export default About;