import React, {Component} from 'react';

import './App.css';
import resumeData from '../../resumeData';
import timelineElements from "../experience/timelineElements";
import About from '../about/About';
import Home from '../home/Home';
import Header from "../header/Header";
import Resume from '../resume/Resume'
import Experience from "../experience/Experience";
import Portfolio from '../portfolio/Portfolio';
import Footer from "../contacts/Footer";


export default class App extends Component {

    render() {
        return(
            <div>
                <Header />
                <Home />
                <About resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
                <Experience timelineElements={timelineElements}/>
                <Portfolio resumeData={resumeData}/>
                <Footer />
            </div>
        )
    }

}