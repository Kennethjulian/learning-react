import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Kenneth',  age: 27},
      {name: 'Alijah', age: 3},
      {name: 'Data', age: 1}
    ]
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working</p>
       <button>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbie: Coading</Person>  
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbie: Drawing</Person> 
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbie: chewing things </Person> 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, "Does this work"));
  }
}

export default App;
