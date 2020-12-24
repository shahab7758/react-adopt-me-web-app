import React, { Component } from 'react';
import './App.css';
import pf from "petfinder-client";
import Pet from './Pet';

const petfinder = pf({
  key:process.env.Api_key,
  secret:process.env.API_SECRET
})
class App extends Component {
constructor(props){
  super(props)
  this.state={
    pets:[]
  }
}
  componentDidMount() {
    petfinder.pet.find({output: 'full', location: 'Seattle, WA'})
     .then(data => {
      let pets;
      if(data.petfinder.pets && data.petfinder.pets.pet){
        if(Array.isArray(data.petfinder.pets.pet)){
          pets=data.petfinder.pets.pet
        }else{
          pets=[data.petfinder.pets.pet]
        }
      }else{
        pets=[]
      }
      this.setState({ pets  });
     })
  }


  render() { 
    return (
      <div>
        <h1>Adopt</h1>
        {
          this.state.pets.map(pet =>{
            let breed;
            if(Array.isArray(pet.breeds.breed)){
              breed=pet.breeds.breed.join(', ')
            }
            else{
              breed=pet.breeds.breed
            }
          return  <Pet 
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            />
          })
        }
      </div>
      );
  }
}
 
export default App;
