import React , {Component} from 'react';
import './Spect.css';

// import Navbar from './Navbar';

class Spect extends Component{
    render(){
        return(
            <div className="container">
            <div className="speact-compo">
                <div className="head"><b>Our Speciality</b></div>
                <div className='row1 row'> 
                    <div className="col col-sm-4 col-md-3 col-xs-6 speciality row">
                        
                            <div className="num col col-sm-2">1</div>
                            <div className="specs col col-sm-10">Timely pick up and drop off</div>
                        
                        <div className="extra col col-sm-12">
                            <p>We value time and we ensure to deliver bikes on time</p>
                        </div>
                    </div>
                    <div className="col col-sm-4 col-md-3 col-xs-6 speciality row">
                        
                            <div className="num col col-sm-2">2</div>
                            <div className="specs col col-sm-10">Most trusted & transparent process</div>
                        
                        <div className="extra col col-sm-12">
                            <p>We are upfront about the entire process of renting a bike from us</p>
                        </div>
                    </div>
                    <div className="col col-sm-4 col-md-3 col-xs-6 speciality row">
                        
                            <div className="num col col-sm-2">3</div>
                            <div className="specs col col-sm-10">Serving in more than 40+ cities</div>
                        
                        <div className="extra col col-sm-12">
                            <p>In case of any issue, we will coordinate with our other branches and resolve it</p>
                        </div>
                    </div>
                    <div className="col col-sm-4 col-md-3 col-xs-6 speciality row">
                        
                            <div className="num col col-sm-2">4</div>
                            <div className="specs col col-sm-10">Choose from a wide variety of bikes</div>
                        
                        <div className="extra col col-sm-12">
                            <p>Pick a bike that suits your need for commuting within the city or for a long ride.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        );
    }
}
export default Spect 