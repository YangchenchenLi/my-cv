import React, {Component} from 'react';

import './App.css';
import resumeData from '../../resumeData';
import About from '../about/About';
import Header from "../header/Header";
import Resume from '../resume/Resume'


export default class App extends Component {

    render() {
        return(
            <div>
                <Header />
                <About resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
            </div>
        )
    }

}