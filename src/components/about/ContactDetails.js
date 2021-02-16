import React, {Component} from 'react'

export default class ContactDetails extends Component {

    render(){
        let contactDetails=this.props.contactDetails

        return(
            <div>
                <h2>Contact Details</h2>
                <div>
                    <ul className='list-inline'>
                        {
                            contactDetails.map((item) => {
                                return(
                                    <div>
                                        <li>Address: {item.address}</li>
                                        <li>Email: {item.email}</li>
                                        <li>Phone: {item.phone}</li>
                                    </div>

                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}