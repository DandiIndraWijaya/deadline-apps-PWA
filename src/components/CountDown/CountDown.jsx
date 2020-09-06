import React, { useEffect, useRef, useState } from 'react';
import { withTheme } from 'emotion-theming';


const CountDown = ({deadline}) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    let interval = useRef();

    const startTimer = (deadline) => {
        if(deadline === '0'){
            return;
        }
        let countDownDate = new Date(deadline).getTime();
        interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
        
    }

    useEffect(() => {
        if(deadline === ''){
            return;
        }
        startTimer(deadline);
        return () => {
            clearInterval(interval.current);
        }
    })

    if(deadline === ''){
        return null
    }else{
        return (
            <section className="countdown" style={{ display: 'flex', justifyContent:"end" }}>
                <section style={{ opacity: timerDays === 0 ? '0.5' : '1' }} >
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </section>
                <span>{timerDays !== 0 ? ':' : ''}</span>
    
                <section style={{ opacity: timerHours === 0 ? '0.5' : '1' }}>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </section>
                <span>{timerHours !== 0 ? ':' : ''}</span>
    
    
                <section style={{ opacity: timerMinutes === 0 ? '0.5' : '1' }}>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                </section>
                <span>{timerMinutes !== 0 ? ':' : ''}</span>
    
                <section style={{ opacity: timerSeconds === 0 ? '0.5' : '1' }}>
                    <p>{timerSeconds}</p>
                    <p><small>Seconds</small></p>
                </section>
            </section>
           
        )
    }
    
}

export default withTheme(CountDown);