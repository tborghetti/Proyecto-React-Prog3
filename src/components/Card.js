import React from 'react';

function Card(props) {
    return (
        <div className="Card">
        <p>{props.DataShown.gender}</p>
            <img src={props.DataShown.picture.medium} alt=""/>
            <h2>{props.DataShown.name.last}</h2>
            <p>{props.DataShown.name.first} - {props.DataShown.email}</p>
            <p>{props.DataShown.dob.date} - {props.DataShown.dob.age}</p>
        </div>
    );
}
export default Card;