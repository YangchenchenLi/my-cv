import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component {

    render(){

        return(
            <section id='contacts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h5>Download Resume</h5>
                            <ul>
                                <li><a href='#'>Resume</a></li>
                            </ul>
                        </div>

                        <div className='col-sm-6'>
                            <h5>Social Link</h5>
                            <ul>
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