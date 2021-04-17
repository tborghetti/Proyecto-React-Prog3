import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Card uk-grid-small uk-background-muted uk-padding uk-card-hover uk-width-1-3@m">
                <a onClick={this.props.onDelete.bind(this, this.props.id)} href= "#"><i class="fas fa-times"></i></a>
                <div className="uk-grid-small uk-flex-middle" uk-grid>
                    <p className="other" >{this.props.DataShown.gender}</p>
                    <div className="uk-width-auto">
                        <img src={this.props.DataShown.picture.medium} alt="" />
                        <h2 className="name uk-card-title uk-margin-remove-bottom"> {this.props.DataShown.name.last}, {this.props.DataShown.name.first}</h2>
                        <p className="other uk-text-meta uk-margin-remove-top">{this.props.DataShown.email}</p>
                        <hr></hr>
                    </div>
                    <p className="other" >{this.props.DataShown.dob.date} - ({this.props.DataShown.dob.age}) </p>
                    <hr></hr>
                </div>
                <ul uk-accordion="multiple: true">
                    <li className="uk-close">
                        <a className="uk-accordion-title" href="#">More info</a>
                        <div className="uk-accordion-content">
                            <ul>
                                <li>
                                    <p>
                                        Calle y numero: 
                                       {this.props.DataShown.location.street.name} {this.props.DataShown.location.street.number}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Ciudad - estado:
                                       {this.props.DataShown.location.city} - {this.props.DataShown.location.state}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        País:
                                       {this.props.DataShown.location.country}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Codigo Postal:
                                       {this.props.DataShown.location.postcode}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Fecha de registro:
                                        {this.props.DataShown.registered.date}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Telefono:
                                        {this.props.DataShown.phone}
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

