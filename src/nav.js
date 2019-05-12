import React , {Component} from 'react';
import './nav.css'
import Navbar from './Navbar';

class Nav extends Component{
    render(){
        return(
            <div className='main img-responsive '>
                <Navbar></Navbar>
                <div className="schedule row hidden-xs">
                    <div className='date-p col col-sm-3 '>
                        Pickup Date
                        <hr></hr>
                    </div>
                    <div className="time-p col col-sm-2 ">
                        Time
                        <hr></hr>
                    </div>
                    <div className='date-p col col-sm-3 '>
                        Pickup Date
                        <hr></hr>
                    </div>
                    <div className="time-p col col-sm-2 ">
                        Time
                        <hr></hr>
                    </div>
                    <div className="time-p col col-sm-2 " >
                        <button className="pull-right btn">SEARCH</button>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Nav;