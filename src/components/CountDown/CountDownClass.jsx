import React, { createRef } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';



class CountDown extends React.Component{
    constructor() {
        super();
        this.interval = createRef();
      }

    state = {
        timerDays: '00',
        timerHours: '00',
        timerMinutes: '00',
        timerSeconds: '00'
    }

    startTimer = (deadline) => {
        let countDownDate = new Date(deadline).getTime();
        this.interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(this.interval.current);
            }else{
                this.setState({
                    timerDays: days,
                    timerHours: hours,
                    timerMinutes: minutes,
                    timerSeconds: seconds
                })
            }
        }, 1000);
        
    }

    componentDidMount(){
        const { deadline } = this.props;
        this.startTimer(deadline);
        return () => {
            clearInterval(this.interval.current);
        }
    }

    componentDidUpdate(){
        const { deadline } = this.props;
        this.startTimer(deadline);
    }

    render(){
        const { timerDays, timerHours, timerMinutes, timerSeconds } = this.state;
        return(
            <section style={{ display: 'flex', justifyContent:"end" }}>
                <section>
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </section>
                <span>{timerDays !== 0 ? ':' : ''}</span>

                <section>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </section>
                <span>{timerHours !== 0 ? ':' : ''}</span>


                <section>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                </section>
                <span>{timerMinutes !== 0 ? ':' : ''}</span>

                <section>
                    <p>{timerSeconds}</p>
                    <p><small>Second</small></p>
                </section>
            </section>
        )
    }
}

export default withTheme(CountDown)