import { Component } from 'react';
import Card from './Card';
import React from 'react';

export default class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            infoCards:[ ],
            infoCardsOriginal:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=9')
        .then((result) => result.json())
        .then((data) => { 
          this.setState({infoCards: data.results, infoCardsOriginal:data.results})
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
       let inputAdd = document.querySelector(".add").value //para obtenr el valor del input y sin el value te trae todo el input -  //aca tenemos que capturar el valor del input
       console.log(inputAdd)
        fetch('https://randomuser.me/api/?results='+ inputAdd) 
        .then((result) => result.json())
        .then((data) => { 
          let info = data.results.concat(this.state.infoCards); //concat:metodo que permite unir dos arrays en uno - guardar eso en una var - pusios primero el data.results para que 
          this.setState({infoCards: info})
        })
      }

      filterCards(){
        let inputFilter = document.querySelector(".filter").value.toUpperCase()
        console.log(inputFilter)
        let lookUp = this.state.infoCards.filter((search)=>{
            let fname = search.name.first.toUpperCase()
            let flastname = search.name.last.toUpperCase()
            let fage = search.dob.age.toString()

          return fname.startsWith(inputFilter) || flastname.startsWith(inputFilter) ||  fage.includes(inputFilter) //buscar si incluye el numero y pasar todo a string y poner con el metodo include()
          })
        console.log(lookUp)
          this.setState({infoCards: lookUp})
      }

      resetFilter(){
        this.setState({infoCards: this.state.infoCardsOriginal})
      }


    render(){
        return (
            <div>
            <button className="uk-align-center skewBtn lorang" onClick={this.resetFilter.bind(this)} >RESET FILTER</button>
            <div className='container'>
            <span>
            <input className='add' type="number" min="1" placeholder='# of Cards'></input>
            <a onClick={this.addCard.bind(this)}><i class="fas fa-plus"></i></a>
            </span>
            <span>
            <input onChange={this.filterCards.bind(this)} className='filter' type="text" required placeholder='Filter'></input>
            <a onClick={this.filterCards.bind(this)}><i class="fas fa-filter"></i></a>
            
            </span>
            </div>
            <div className="uk-grid-collapse uk-text-center"  uk-sortable="handle: .uk-sortable-handle" uk-grid='true'>
                {this.state.infoCards.map( (oneCard, idx) => {
                    return (
                        <Card DataShown={oneCard} key={idx} onDelete={this.delete.bind(this)} id={oneCard.id} originaldate={oneCard.dob.date} />
                    )
                })
                }
            </div>
            </div>
        );
    }
}

