import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import CountDown from '../CountDown/CountDown';

const StyledDeadline = styled.div`
    padding: 10px;
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
    font-size: 10pt;
    padding: 10px;
`;

class Deadline extends React.Component{
    render(){
        const { theme } = this.props

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
                        <tr>
                            <Styledtd theme={theme}>Pemrograman Web</Styledtd>
                            <Styledtd theme={theme}><CountDown /></Styledtd>
                            <Styledtd theme={theme}><a href="#">detail </a> | <a href="#"> hapus</a></Styledtd>
                        </tr>
                        <tr>
                            <Styledtd theme={theme}>Pemrograman Web</Styledtd>
                            <Styledtd theme={theme}><CountDown /></Styledtd>
                            <Styledtd theme={theme}><a href="#">detail </a> | <a href="#"> hapus</a></Styledtd>
                        </tr>
                    </tbody>
                </Styledtable>
            </StyledDeadline>
        )
    }
}


export default withTheme(Deadline);