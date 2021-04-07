import React from 'react';

function Card(props) {
    return (
        <div className="Card">
        <p>{props.DataShown.results.gender}</p>
            {/* <img src={props.DataShown.results.picture.medium} alt=""/> */}
            {/* <h2>{props.DataShown.results.name.last}</h2>
            <p>{props.DataShown.results.name.first} - {props.DataShown.results.email}</p>
            <p>{props.DataShown.results.dob.date} - {props.DataShown.results.dob.age}</p> */}
        </div>
    );
}
export default Card;