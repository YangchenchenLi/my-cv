import React, {Component} from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "./WorkIcon";
import './experience.css';

export default class Experience extends Component {

    render(){
        let timelineElements = this.props.timelineElements;

        return(
            <section id='experience'>
                <div>
                    <h1 className='title'>Experience</h1>
                    <VerticalTimeline>
                        {
                            timelineElements.map((item) => {
                                return(
                                    <VerticalTimelineElement
                                        key={item.key}
                                        date={item.date}
                                        dataClassName='date'
                                        icon={<WorkIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            {item.title}
                                        </h3>
                                        <h5 className="vertical-timeline-element-subtitle">
                                            <a href={item.link}>{item.location}</a>
                                        </h5>
                                        <p id="description">{item.description}</p>
                                        <span className='skills'><b>Developed Skills: </b>{item.skills}</span>
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </section>
        )
    }
}