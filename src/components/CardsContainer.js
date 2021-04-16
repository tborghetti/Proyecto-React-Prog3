import React from 'react';
import Card from './Card';

const infoCards = [
    {"gender": "male", "name": { "title": "Mr", "first": "Øystein", "last": "Eikenes" }, "email": "oystein.eikenes@example.com", "dob": { "date": "1951-03-20T03:37:34.443Z", "age": 70 },
        "picture": { "large": "https://randomuser.me/api/portraits/men/85.jpg", "medium": "https://randomuser.me/api/portraits/med/men/85.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg" }, "nat": "NO"},
    {"gender": "male", "name": { "title": "Mr", "first": "Jorge", "last": "Martinez" }, "email": "jmartinez@example.com", "dob": { "date": "1951-03-20T03:37:34.443Z", "age": 60 }, "id": { "name": "FN", "value": "20035147367" }, 
        "picture": { "large": "https://randomuser.me/api/portraits/men/85.jpg", "medium": "https://randomuser.me/api/portraits/med/men/85.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg" }, "nat": "NO"},
    {"gender": "female", "name": { "title": "Mrs", "first": "Maria", "last": "Fernandez" }, "email": "mariafernandez@example.com", "dob": { "date": "1951-03-20T03:37:34.443Z", "age": 50 }, "id": { "name": "FN", "value": "20035147365" }, 
        "picture": { "large": "https://randomuser.me/api/portraits/men/85.jpg", "medium": "https://randomuser.me/api/portraits/med/men/85.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg" }, "nat": "NO"},
    {"gender": "male", "name": { "title": "Mr", "first": "Lautaro", "last": "Gomez" }, "email": "lgomez@example.com", "dob": { "date": "1951-03-20T03:37:34.443Z", "age": 30 }, "id": { "name": "FN", "value": "20035147365" }, 
        "picture": { "large": "https://randomuser.me/api/portraits/men/85.jpg", "medium": "https://randomuser.me/api/portraits/med/men/85.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg" }, "nat": "NO"}
    ]

function CardsContainer() {
    return (
        <div className="uk-grid-collapse uk-text-center" uk-grid='true'>
            {infoCards.map(function (oneCard, idx) {
                return (
                    <Card DataShown={oneCard} key={idx} />
                )
            })
            }
        </div>
    );
}

export default CardsContainer;