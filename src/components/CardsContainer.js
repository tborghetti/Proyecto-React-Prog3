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
        fetch('https://randomuser.me/api/?results=9')
        .then((result) => result.json())
        .then((data) => { 
          this.setState({infoCards: data.results})
        })
      }

      delete(idCard){
        console.log(idCard);
        let person = this.state.infoCards.filter((item)=>{
         return item.id !== idCard
       })
       this.setState({infoCards: person})
      }

      addCard(){
        fetch('https://randomuser.me/api/?results=2')
        .then((result) => result.json())
        .then((data) => { 
          this.state.infoCards.push(data.results[0]);
          this.setState({infoCards: this.state.infoCards})
        })
      }
      filterCards(condition){
        console.log(condition);
        let lookUp = this.state.infoCards.filter((search)=>{
            return search === condition
          })
          this.setState({infoCards: lookUp})
      }
    render(){
        return (
            <div>
            <div className='container'>
            <span>
            <input className='add' type="number" min="1" placeholder='# of Cards'></input>
            <a onClick={this.addCard.bind(this)}><i class="fas fa-plus"></i></a>
            </span>
            <span>
            <input className='filter' type="text" required placeholder='Filter'></input>
            <a onClick={this.filterCards.bind(this)}><i class="fas fa-filter"></i></a>
            </span>
            </div>
            <div className="uk-grid-collapse uk-text-center"  uk-sortable="handle: .uk-sortable-handle" uk-grid='true'>
                {this.state.infoCards.map( (oneCard, idx) => {
                    return (
                        <Card DataShown={oneCard} key={idx} onDelete={this.delete.bind(this)} id={oneCard.id} />

                    )
                })
                }
            </div>
            </div>
        );
    }
}

