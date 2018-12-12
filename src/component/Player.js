import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import { Consumer } from './Context';


class Player extends PureComponent{
    static propTypes = {
        index: PropTypes.index
    };

    render(){
        const { index } = this.props
        return (
            <Consumer>
                { context => (
                    <div className="player">
                        <span className="player-name">
                        <button className="remove-player" onClick={() => context.actions.removePlayer(context.players[index].id)}>x</button>

                        <Icon isHighScore={context.isHighScore === context.players[index].score} />
                        {context.players[index].name}
                        </span>
      
                        <Counter 
                            index= {index}
                        />          
                    </div>
                ) }
            </Consumer>
        );
    }
  }

  

export default Player;