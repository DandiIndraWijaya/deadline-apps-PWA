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
`;

const Styledtd = styled.td`
color: ${props => props.theme.color.primary.oldgrey};
    text-align: center;
    font-size: 8pt;
    padding: 10px;
`;

class Deadline extends React.Component{
    render(){
        const { theme, deadlines, deleteDeadline } = this.props

        return (
            <StyledDeadline>
                <Styledtable>
                    <thead>
                        <tr>
                            <Styledth theme={theme}>Mata Kuliah</Styledth>
                            <Styledth theme={theme}>Sisa Waktu</Styledth>
                            <Styledth theme={theme}>Aksi</Styledth>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            deadlines.length > 0 && 
                            deadlines.map((deadline, index ) => {
                                return (
                                    <tr key={index}>
                                        <Styledtd theme={theme}>{deadline.mataKuliah}</Styledtd>
                                        <Styledtd theme={theme}><CountDown /></Styledtd>
                                        <Styledtd theme={theme}><a href="#">detail </a> | <Button text="Hapus" color="red"  margin="0" backgroundColor="white" index={index} onClick={deleteDeadline} /> </Styledtd>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Styledtable>
            </StyledDeadline>
        )
    }

    
}


export default withTheme(Deadline);