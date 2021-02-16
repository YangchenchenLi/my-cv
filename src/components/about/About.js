import React, {Component} from 'react';

import AboutMe from './AboutMe';
import ContactDetails from './ContactDetails'
import Profile from "./Profile";


export default class About extends Component {

    render() {

        return (
            <section id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Profile />
                        </div>
                        <div className='col-md8'>
                            <AboutMe />
                            <ContactDetails />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}