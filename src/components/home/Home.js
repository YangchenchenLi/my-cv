import React, {Component} from 'react';
import YouTube from 'react-youtube';

import './home.css';

export default class Home extends Component {

    render(){

        return(
            <section id='home'>
                <div className='empty'></div>
                <YouTube id='video' videoId='2QSxKVHGTs4'/>
            </section>
        )
    }
}