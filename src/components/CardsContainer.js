import { Component } from 'react';
import Card from './Card';
import React from 'react';

export default class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            infoCards:[ ]
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=100')
        .then((result) => result.json())
        .then((data) => { 
          this.setState({infoCards: data.results})
          console.log(data.results)
        })
      }

      delete(idCard){
        console.log(idCard);
        let person = this.state.infoCards.filter((item)=>{
         return item.id !== idCard
       })
       this.setState({infoCards: person})
      }

    render(){
        return (
            <div className="uk-grid-collapse uk-text-center" uk-grid='true'>
                {this.state.infoCards.map( (oneCard, idx) => {
                    return (
                        <Card DataShown={oneCard} key={idx} onDelete={this.delete.bind(this)} id={oneCard.id} />

                    )
                })
                }
            </div>
        );
    }
}

