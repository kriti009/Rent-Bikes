import React , {Component} from 'react';
import './social.css'


class Social extends Component{
    render(){
        return(
            // <div className="container">
                <div className="soci row ">
                    <div className='con container row'>

                        <div className="col col-xs-6 col-sm-6 col-md-3  col-12 city ">
                            <div className="social-details" >
                                <b><span className="count">40 + </span><br />
                                <span>CITIES</span></b>
                            </div>
                        </div>
                        {/* <div className="col col-md-1"></div> */}
                        <div className="col col-xs-6 col-sm-6 col-md-3  meter">
                            <div className="social-details">
                                <b><span className="count">5 M</span><br />
                                <span>KILOMETERS</span></b>
                            </div>
                        </div>
                        <div>
                            <div className="col col-xs-6 col-sm-6 col-md-3  fb">
                                <b><span className="count">4.6 <span class="glyphicon glyphicon-star"></span></span><br />
                                <span>On FACEBOOK</span></b>
                            </div>
                        </div>
                        <div>
                            <div className="col col-xs-6 col-sm-6 col-md-3  goo">
                                <b><span className="count">4.5 <span class="glyphicon glyphicon-star"></span></span><br />
                                <span>ON GOOGLE</span></b>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}
export default Social 