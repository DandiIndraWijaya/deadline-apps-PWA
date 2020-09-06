import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import CountDown from '../CountDown/CountDown';
import Button from '../Button/Button';

const StyledDeadline = styled.div`
    padding: 5px;
`;

const Styledtable = styled.table`
    margin-top: 10px;
    width: 100%;
`;

const Styledth = styled.th`
    color: ${props => props.theme.color.primary.oldgrey};
    font-weight: bold;
    padding: 5px;
`;

const Styledtd = styled.td`
color: ${props => props.theme.color.primary.oldgrey};
border-top: solid 1px gainsboro;
    text-align: center;
    font-size: 8pt;
    padding: 10px;
    @media (min-width: 600px){
        font-size: 12pt;
    }
`;

const StyledNoTask = styled.div`
    text-align: center;
    margin: 30px;
    color: grey;
`;

const StyledTask = styled.span`
    font-weight: light;
`;

class Deadline extends React.Component{
    
    render(){
        const { theme, deadlines, deleteDeadline } = this.props
        
        if(deadlines.length > 0){
            return (
                <StyledDeadline>
                    <Styledtable>
                        <thead>
                            <tr>
                                <Styledth theme={theme}>Tasks & Deadlines</Styledth>
                                <Styledth theme={theme}>Your Time</Styledth>
                                <Styledth theme={theme}></Styledth>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                deadlines.length > 0 && 
                                deadlines.map((deadline, index ) => {
                                    const time = new Date(deadline.due);
                                    function formatAMPM(date) {
                                        var hours = date.getHours();
                                        var minutes = date.getMinutes();
                                        var ampm = hours >= 12 ? 'pm' : 'am';
                                        hours = hours % 12;
                                        hours = hours ? hours : 12; // the hour '0' should be '12'
                                        minutes = minutes < 10 ? '0'+minutes : minutes;
                                        var strTime = hours + ':' + minutes + ' ' + ampm;
                                        return strTime;
                                      }

                                      function formatMonth(date){
                                          let month = date.getMonth() + 1;
                                          switch(month){
                                                case 1:
                                                    month = 'January';
                                                break;
                                                case 2:
                                                    month = 'February';
                                                break;
                                                case 3:
                                                    month = 'March';
                                                break;
                                                case 4:
                                                    month = 'April';
                                                break;
                                                case 5:
                                                    month = 'May';
                                                break;
                                                case 6:
                                                    month = 'June';
                                                break;
                                                case 7:
                                                    month = 'July';
                                                break;
                                                case 8:
                                                    month = 'August';
                                                break;
                                                case 9:
                                                    month = 'September';
                                                break;
                                                case 10:
                                                    month = 'October';
                                                break;
                                                case 11:
                                                    month = 'November';
                                                break;
                                                case 12:
                                                    month = 'December';
                                                break;
                                          }

                                          return month;
                                      }
                                    return (
                                        <tr key={index}>
                                            <Styledtd theme={theme}>
                                                <StyledTask>{deadline.task}</StyledTask>
                                                <br></br>
                                            <small style={{ fontSize: '6pt' }}>{formatAMPM(time)}, {time.getDate()}th {formatMonth(time)} {time.getFullYear()}</small>    
                                            </Styledtd>
                                            <Styledtd theme={theme}><CountDown deadline={deadline.due} /></Styledtd>
                                            <Styledtd theme={theme}><Button text="Remove" color="#f55e53" fontSize="8pt"  margin="0" backgroundColor="white" index={index} onClick={deleteDeadline} /> </Styledtd>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </Styledtable>
                </StyledDeadline>
            )}else{
                return (
                <StyledNoTask>
                    <h1>No Task :)</h1> 
                </StyledNoTask>
                )
            }
        
        
    }

    
}


export default withTheme(Deadline);