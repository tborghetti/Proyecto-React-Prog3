import React from 'react';

function Card(props) {
    return (
        <div className="Card uk-grid-small uk-background-muted uk-padding uk-card-hover uk-width-1-3@m">
            <div className="uk-grid-small uk-flex-middle" uk-grid>
                <p className="other" >{props.DataShown.gender}</p>
                <div className="uk-width-auto">
                    <img src={props.DataShown.picture.medium} alt=""/>
                    <h2 className="name uk-card-title uk-margin-remove-bottom"> {props.DataShown.name.last}, {props.DataShown.name.first}</h2>
                    <p className="other uk-text-meta uk-margin-remove-top">{props.DataShown.email}</p>
                    <hr></hr>
                </div> 
                <p className="other" >{props.DataShown.dob.date} - {props.DataShown.dob.age} </p>
            <hr></hr>
            <button className="uk-button uk-button-danger">Borrar</button>
            </div>
        </div>
        
    );
}
export default Card;