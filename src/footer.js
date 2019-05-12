import React , {Component} from 'react';

import './footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="foot ">
                <div className="container">
                    <div className=" row  alpha">
                        <div className="logo col col-xs-5">
                            <img alt='royal brothers' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rb_logo_new_light-3b5edf4590468cb80e7dfd22f213c72b053428aab2226718001d87a8f5982c84.png"/>
                        </div>
                        <div class='company col col-xs-5'>
                            <h2>Company</h2>
                            <div className="col col-xs-6 list">
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Condition</a></li>
                            </div>
                            <div className="col col-xs-6 list">
                                <li><a href="/">Tariff</a></li>
                                <li><a href="/">PArtner With Us</a></li>
                                <li><a href="/">Reach Us</a></li>
                                <li><a href="/">About US</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </div>
                        </div>
                        <div className="follow col col-xs-2">
                            <h2>Follow</h2>
                            <div className="list">
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">LinkedIn</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Footer;