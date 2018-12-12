import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import {Provider} from './Context';


class App extends Component {
  state = {
    players: [
        {
            name: "Vishal",
            score: 0,
            id: 1
        },
        {
            name: "Nikhil",
            score: 0,
            id: 2
        },
        {
            name: "Rohit",
            score: 0,
            id: 3
        },
        {
            name: "Suvy",
            score: 0,
            id: 4
        }
    ]
}

prevPlayerId = 4;

handleScoreChange = (index, delta) => {
  console.log(index+" delta "+delta);
  this.setState( prevState => ({
          score: prevState.players[index].score += delta        
  }));
}

handleAddPlayer = (name) => {
    this.setState( prevState => {
        return{
          players: [
              ...prevState.players,
              {
                  name,
                  score: 0,
                  id: this.prevPlayerId += 1
              }
          ]
        }
    })
}

handleRemovePlayer = (id) => {
    this.setState(prevState => {
        return {
            players: prevState.players.filter( p => p.id !== id)
        }
    });
}

getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if(highScore){
        return highScore;
    }
    return null;
}
  

  render(){
      const highScore = this.getHighScore();
      return (
        <Provider value={{players: this.state.players, isHighScore: highScore, actions: {changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer, addPlayer: this.handleAddPlayer}}}>
            <div className="scoreboard">
              <Header />
  
              {/* Players List */}
              {this.state.players.map( (player,index) =>
                  <Player 
                      key= {player.id.toString()}
                      index= {index} />
              )}  

              <AddPlayerForm />             
            </div>
        </Provider>
          
      );
  }
}

export default App;
