import React from 'react'

export default class Clock extends React.Component{
    constructor(){
        super();
        
        this.state = {
            time: new Date(),
        }
        // this.tick = this.tick.bind(this);
        // this.intervalId = 0;
    }

 

    tick(){
        this.setState({time: new Date()});
    }

    componentDidMount(){
        this.intervalId = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount(){
        alert('this is a 1 second warning');
        clear(this.intervalId);
    }

    render(){
        return (
            <div>
                <h1>Big Ben</h1>

                {this.format(this.state.time.getHours())}:
                {this.format(this.state.time.getMinutes())}:
                {this.format(this.state.time.getSeconds())}
            </div>
            
        )
    }

    format(a){
        if(a < 10){
            return '0' + a.toString();
        }
        return a.toString();
    }
}