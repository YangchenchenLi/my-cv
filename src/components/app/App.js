import React, {Component} from 'react';

import './App.css';
import About from '../about/About';
import resumeData from '../../resumeData'


export default class App extends Component {

    render() {
        return(
            <div>
                <About resumeData={resumeData}/>
            </div>
        )
    }

}