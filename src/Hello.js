//Don't forget to import React!
import React, { Component } from 'react';

//Import any other components, pictures, functions, styling etc. here
import './Hello.css';

//Class Definition Here!
class Hello extends Component {
    //state definition
        state = {
            name: '',
            color: '#000000',
    
    }
    //Lifecycle Methods

    componentDidMount() { 

    }

    //Additional Functions

    handleClick = () => { 

    }

    handleInputChange = () => { 

    }

    
    //Render Function
    render (){
        //Return Statement
        return (
            //Every return statement needs to start with a parent element (fragments or divs)
            <div className='f1 tc' style={{background: this.state.color, color: 'magenta'}}>
                <h1>Hello World</h1>
                <p>Welcome to REACT</p>
                {this.state.name}
            </div>
        )
    }
}

//Don't forget to export! :)
export default Hello;