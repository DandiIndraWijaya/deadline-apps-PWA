import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';


const StyledHeader = styled.header`
    padding: 15px 10px;
    background-color: ${props => props.theme.color.primary.skyblue};
    color: white;
`;

class Header extends React.Component {
    render(){
        const { theme } = this.props;
        return (
            <StyledHeader theme={theme}>
                <h1>Tugas Kuliah Saya</h1>
            </StyledHeader>
        )
    }
}

export default withTheme(Header);