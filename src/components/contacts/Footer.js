import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component {

    render(){

        return(
            <section id='contacts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>                           
                            <ul className='contact-info'>
                                <li><h5>CONTACT</h5></li>
                                <li><a>Contact: Chenchen Li</a></li>
                                <li><a>T: 0466830999</a></li>
                                <li><a>E: chenchenli1030@gmail.com</a></li>
                            </ul>
                        </div>

                        <div className='col-sm-6'>                           
                            <ul className='contact-info'>  
                                <li><h5>SOCIAL LINK</h5></li>                             
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