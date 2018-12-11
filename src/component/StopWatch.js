import React, {Component} from 'react';

class StopWatch extends Component{

    state ={
        isRunning: false,
        elapasedTime: 0,
        previousTime: 0
    };

    componentDidMount(){
        this.intervalId = setInterval(() => this.tick(), 100)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    tick= () => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapasedTime: prevState.elapasedTime + (now - prevState.previousTime)
            }));
        }
    }

    handleReset = () => {
        this.setState({elapasedTime: 0});
    }

    handleStopWatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if(!this.state.isRunning){
            this.setState({previousTime: Date.now() })
        }
    }
    render(){
        const seconds = Math.floor(this.state.elapasedTime / 1000);

        return (
            <div className="stopwatch">
                <h2>StopWatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopWatch}>{this.state.isRunning ? "Stop" : "Start"}</button>
                <button on onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default StopWatch;