import React, {Component} from 'react'

export default class Skills extends Component {

    render(){

        let skills = this.props.skills

        return(
            <div id='skills' className='container'>
                <div className='row skills'>
                    <div className='col-sm-3'>
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className='col-sm-9'>
                        {
                            skills.map((item) => {
                                return(
                                    <div className='row item'>
                                        <div className='twelve columns'>
                                            <h3>{item.skillRelated}</h3>
                                            <p className='info'>
                                                {item.skill}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}