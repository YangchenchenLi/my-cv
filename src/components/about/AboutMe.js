import React, {Component} from 'react'

export default class AboutMe extends Component {

    render(){
        let aboutMe = this.props.aboutMe;

        return(
            <div>
                <h2>About Me</h2>
                <p>
                    {
                        aboutMe
                    }
                </p>

            </div>
        )
    }
}