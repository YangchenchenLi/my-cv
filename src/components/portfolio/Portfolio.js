import React, {Component} from 'react';

import './portfolio.css';

export default class Portfolio extends Component {

    render(){

        let resumeData = this.props.resumeData;

        return(
            <section id='portfolio'>
                <h2>My Portfolio</h2>

                <div className='container'>
                    <div className='row' id='portfolio-wrapper'>
                        {
                            resumeData.portfolio.map((item) => {
                                return(
                                    <div className='columns portfolio-item col-sm-4'>
                                        <div className='item-wrap'>
                                            <h5><a href={item.link}>{item.name}</a></h5>
                                            <div>
                                                <img src={item.coverPicture} alt='project cover image' />
                                            </div>
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