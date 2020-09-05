import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

const StyledScreen = styled.div`
    border: gainsboro 1px solid;
    width: 800px;
    background-color: ${props => props.theme.color.background};
    @media (max-width: 600px) {
        width: 100%;
    }
`;

class Screen extends React.Component{
    render(){
        const { children, theme } = this.props;
        return (
            <StyledScreen theme={theme}>
                {children}
            </StyledScreen>
        )
    }
}

export default withTheme(Screen);