import React, {Component} from 'react';

import workIcon from "./icon-work.png";

export default class WorkIcon extends Component {

    render(){

        return(
            <img
                style={{
                    width:60,
                    height:60
                }}
                src={workIcon} alt='work icon' />

        )
    }
}