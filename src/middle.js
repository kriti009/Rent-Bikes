import React , {Component} from 'react';
// import './nav.css'
import Paypal from './paypal';
import Social from './social';
import Spect from './Spect';
import Bikes from './bikes';

// import Navbar from './Navbar';

class Middle extends Component{
    render(){
        return(
            <div>
                <Paypal></Paypal>        
                <Social></Social>   
                <Spect></Spect>       
                <Bikes></Bikes>      
            </div>
        );
    }
}
export default Middle 