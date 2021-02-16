import React, {Component} from 'react';

export default class Education extends Component {

    render(){
        let education = this.props.education;

        return(
            <section id='resume' className='container'>
                <div className='row education'>
                    <div className='col-sm-3'>
                        <h1><span>Education</span></h1>
                    </div>

                    <div className='col-sm-9'>
                        {
                            education.map((item) => {
                                return(
                                    <div className='row item'>
                                        <div className='twelve columns'>
                                            <h3>{item.universityName}</h3>
                                            <p className='info'>
                                                {item.program}
                                                <span>&bull;</span> <em className='date'>{item.period}</em>
                                                <br/>
                                                <h7 className='GPA'>GPA: {item.GPA}</h7>
                                            </p>
                                            <ul className='courses'>
                                                {
                                                    item.highlightedCourses.map((value) => {
                                                        return(
                                                            <li>{value}</li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                        </div>

                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </section>
        )
    }
}