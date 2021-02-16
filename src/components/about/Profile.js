import React, {Component} from 'react';

import avatar from './avatar.jpg';
import './about.css'

export default class Profile extends Component {

    render(){

        return(
            <div>
                <img className='avatar' src={avatar} alt='avatar image' />
            </div>
        )
    }
}