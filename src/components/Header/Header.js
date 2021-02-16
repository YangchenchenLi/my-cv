import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {

    render(){

        return(
            <React.Fragment>
                <header id='home'>
                    <nav id='nav-wrap' className='navbar navbar-expand-lg'>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul id='nav' className='navbar-nav'>
                                <li className='nav-item current'><a className='nav-link' href='#home'>Home</a></li>
                                <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
                                <li className='nav-item'><a className='nav-link' href='#resume'>Resume</a></li>
                                <li className='nav-item'><a className='nav-link' href='#experience'>Experience</a></li>
                                <li className='nav-item'><a className='nav-link' href='#portfolio'>Portfolio</a></li>
                                <li className='nav-item'><a className='nav-link' href='#contacts'>Contacts</a></li>
                            </ul>
                        </div>
                    </nav>


                </header>

            </React.Fragment>
        )
    }
}