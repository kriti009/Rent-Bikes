import React , {Component} from 'react';
import './Navbar.css'

class Navbar extends Component{
    render(){
        const iconStyle = {
            fontSize : '20px',
            color : 'white'
        };
        return(
            <div>
                <nav class="navbar">
                <div class="container-fluid">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"  aria-expanded="false">
                        <span class="glyphicon glyphicon-search search-icon"></span><span>   </span>
                            {/* <span class="sr-only bar">Toggle navigation</span> */}
                            <i class="fa fa-bars" style={iconStyle}></i>
                        </button>
                        <a class="navbar-brand" href="/"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rb_logo_new_light-3b5edf4590468cb80e7dfd22f213c72b053428aab2226718001d87a8f5982c84.png" alt="royal-brother" ></img></a>
                        
                    </div>
                
                    
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    
                        <ul class="nav navbar-nav">
                            
                            <li >
                                <a href="/">Bikes in Bangalore<span class="caret"></span></a>
                                
                            </li>
                        </ul>
                        
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/">Offer</a></li>
                            <li><a href="/">Trafic</a></li>
                            <li><a href="/">Search <span class="glyphicon glyphicon-search"></span></a></li>
                            <li class="dropdown">
                                <a href="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Rides</a></li>
                                    <li><a href="/">Bike Tour</a></li>
                                    <li><a href="/">F & Q</a></li>
                                    <li><a href="/">Private Policies</a></li>
                                    <li><a href="/">Partner With Us</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </li>
                            <li><a href='/'>SignUp</a></li>
                            <li><a href='/'>LogIn</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default Navbar;