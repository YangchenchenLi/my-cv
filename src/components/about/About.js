import React, {Component} from 'react';

import AboutMe from './AboutMe';
import ContactDetails from './ContactDetails'
import Profile from "./Profile";


export default class About extends Component {

    render() {
        let resumeData = this.props.resumeData;


        return (
            <section id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <Profile />
                        </div>
                        <div className='col-sm-9'>
                            <AboutMe aboutMe={resumeData.aboutMe}/>
                            <ContactDetails contactDetails={resumeData.contactDetails}/>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}