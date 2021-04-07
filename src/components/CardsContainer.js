import React from 'react';
import Card from './Card';

const infoCards = [{
    "results": [{
        "gender": "male", "name": { "title": "Mr", "first": "Øystein", "last": "Eikenes" }, "location": { "street": { "number": 1048, "name": "Tvetenveien" }, "city": "Kvalsund", "state": "Møre og Romsdal", "country": "Norway", "postcode": "6852", "coordinates": { "latitude": "48.5199", "longitude": "-6.1139" }, "timezone": { "offset": "-10:00", "description": "Hawaii" } }, "email": "oystein.eikenes@example.com", "login": { "uuid": "f211e66b-fac7-40eb-8ea0-b1dda203dbce", "username": "redbear730", "password": "tiffany1", "salt": "0PUBd6RG", "md5": "683827bcd7c25fc17617437f1c296c60", "sha1": "5b10bfd40eeebc9cd2606695a57fae62c81e74b3", "sha256": "b7760f13c40acb5d0edd254ec75c386906078877cb69eea740d60d0e90262017" }, "dob": { "date": "1951-03-20T03:37:34.443Z", "age": 70 }, "registered": { "date": "2016-11-17T04:52:56.363Z", "age": 5 }, "phone": "71028778", "cell": "40768876", "id": { "name": "FN", "value": "20035147366" },
        "picture": { "large": "https://randomuser.me/api/portraits/men/85.jpg", "medium": "https://randomuser.me/api/portraits/med/men/85.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg" }, "nat": "NO"
    }], "info": { "seed": "adb19d0e2d7ba466", "results": 1, "page": 1, "version": "1.3" }
}]


function CardsContainer() {
    return (
        <main className="CardsContainer">
            {infoCards.map(function (oneCard, idx) {
                return (
                    <Card DataShown={oneCard} key={idx} />
                )
            })
            }
        </main>
    );
}

export default CardsContainer;