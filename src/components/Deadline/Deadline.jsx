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
    text-decoration: underline;
`;

const Styledtd = styled.td`
color: ${props => props.theme.color.primary.oldgrey};
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

class Deadline extends React.Component{
    
    render(){
        const { theme, deadlines, deleteDeadline } = this.props
        
        if(deadlines.length > 0){
            return (
                <StyledDeadline>
                    <Styledtable>
                        <thead>
                            <tr>
                                <Styledth theme={theme}>Tasks</Styledth>
                                <Styledth theme={theme}>Your Time</Styledth>
                                <Styledth theme={theme}></Styledth>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                deadlines.length > 0 && 
                                deadlines.map((deadline, index ) => {
                                    return (
                                        <tr key={index}>
                                            <Styledtd theme={theme}>{deadline.task}</Styledtd>
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