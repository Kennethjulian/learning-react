import React, { Component } from 'react';
import styled from 'styled-components';


import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button `
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }

`;




class App extends Component {
  state = {
    persons: [
      {id: 'one', name: 'Kenneth',  age: 27},
      {id:'two' , name: 'Alijah', age: 3},
      {id: 'three',name: 'Data', age: 1}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { 
      ...this.state.persons[personIndex]

    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // the modern way
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event)=> this.nameChangeHandler(event, person.id)}/>
          })}
      </div> 
      
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red') // classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); // classes = ['red', ' bold']
    }

    return (
      
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p className={classes.join(' ')}>This is really working</p>
       <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
       {persons}
      </div>
     
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, "Does this work"));
  }
};

export default App;


// the modern way
// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Kenneth',  age: 27},
//       {name: 'Alijah', age: 3},
//       {name: 'Data', age: 1}
//     ],
//   });
//   const [otherState, setOtherState] = useState('some other value');

//   const switchNameHandler = () => {
//        // dont do this this.state.persons[0].name = "Elliot";
//         setPersonsState({persons: [
//         {name: 'Elliot',  age: 27},
//         {name: 'Phoinex', age: 3},
//         {name: 'Zaron', age: 1}
//        ],
      
//        })
//       }
  