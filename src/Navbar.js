import React , {Component} from 'react';
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav class="navbar">
                <div class="container-fluid">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/"><img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiKkdHj2oDiAhV-7XMBHeFAC_8QjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.owler.com%252Fcompany%252Froyalbrothers%26psig%3DAOvVaw2QCXSQWKLyFboM6LzTVCV-%26ust%3D1557019185713025&psig=AOvVaw2QCXSQWKLyFboM6LzTVCV-&ust=1557019185713025" alt="royal-brother" ></img></a>
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