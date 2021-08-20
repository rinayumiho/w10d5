import React from 'react'

export default class Clock extends React.Component{
    constructor(prop){
        super(prop);
        
        this.state = {
            time: new Date(),
            seconds: this.time.getSeconds,
            minutes: this.time.getMinutes,
            hours: this.time.getHours
        }
        // this.tick = this.tick.bind(this);
        setInterval(this.tick.bind(this), 1000);
    }

    render(){
        return (
            <h1>Big Ben</h1>
        )
    }

    tick(){
        let newSeconds = this.state.seconds + 1;
        let newMinutes = this.state.minutes;
        let newHours = this.state.hours;
        if (newSeconds > 59){
            newSeconds = 0;
            newMinutes++;
        }
        if (newMinutes > 59){
            newMinutes = 0;
            newHours++;
        }

        newHours %= 24;

        this.setState({seconds: newSeconds, minutes: newMinutes, hours: newHours});
    }

    format(v){
        if (v < 10){
            return `0`+v.toString();
        }
        return v.toString();
    }
}