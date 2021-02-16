import React, {Component} from 'react';

import Education from "./Education";
import './resume.css'

export default class Resume extends Component {

    render(){
        let resumeData = this.props.resumeData;

        return(
            <div>
                <Education education={resumeData.education}/>
            </div>
        )
    }
}