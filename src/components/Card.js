import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Card uk-grid-small uk-background-muted uk-padding uk-width-1-3@m uk-sortable-handle" >
                <a className="delete uk-align-right" onClick={this.props.onDelete.bind(this, this.props.id)} href= "#"><i class="fas fa-times"></i></a><br></br>
                <div className="uk-align-center uk-grid-small uk-flex-middle" uk-grid>
                    <div className="uk-width-auto">
                        <img className=" uk-border-circle" width="150" height="150" src={this.props.DataShown.picture.large} alt="" />
                        <h2 className="name uk-card-title uk-margin-remove-bottom"> {this.props.DataShown.name.last}, {this.props.DataShown.name.first}</h2>
                        <p className="email uk-text-meta uk-margin-remove-top">{this.props.DataShown.email}</p>
                        <hr></hr>
                    </div>
                    <p className="other uk-text-capitalize" >{this.props.DataShown.gender}</p>
                    <p className="other" uk-datepicker="{format:'DD.MM.YYYY'}">{this.props.DataShown.dob.date} - ({this.props.DataShown.dob.age}) </p>
                    <hr></hr>
                </div>
                <ul uk-accordion="multiple: true">
                    <li className="uk-close">
                        <a className="Card uk-accordion-title" href="#">More details</a>
                        <div className="moreDetail uk-accordion-content">
                            <ul>
                                <li>
                                    <p>
                                        <span>Address:</span> {this.props.DataShown.location.street.name} {this.props.DataShown.location.street.number}, {this.props.DataShown.location.city} 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Location:</span> {this.props.DataShown.location.state}, {this.props.DataShown.location.country}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Zip Code:</span> {this.props.DataShown.location.postcode}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Date Registered:</span> {this.props.DataShown.registered.date}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Phone Number:</span> {this.props.DataShown.phone}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        );
    }
}

