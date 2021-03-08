import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component {

    render(){

        return(
            <section id='contacts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <ul>
                                <li><h5>Contact Me</h5></li>
                                <li><a href='#'>0466830999</a></li>
                                <li><a href='#'>chenchenli1030@gmail.com</a></li>
                            </ul>
                        </div>

                        <div className='col-sm-6'>
                            <ul>
                                <li><h5>Social Link</h5></li>
                                <li><a href='https://www.linkedin.com/in/yangchenchen-li/'>Linkedin</a></li>
                                <li><a href='https://github.com/YangchenchenLi'>GitHub</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </section>
        )
    }
}