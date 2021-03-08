import React, {Component} from 'react';
import ReactPlayer from "react-player";

import './home.css';

export default class Home extends Component {

    render(){

        return(
            <section id='home'>
                <div className='empty'></div>
                <ReactPlayer id='video' url='https://youtu.be/PnwJvYZ6Qt4'/>
            </section>
        )
    }
}