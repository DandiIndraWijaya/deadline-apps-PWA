import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

const StyledCountDown = styled.span`
    font-weight: bold;
`;

class CountDown extends React.Component {
    render(){
        return (
            <StyledCountDown>
                27 Hari 25 Jam 10 Menit 57 Detik
            </StyledCountDown>
        )
    }
}

export default withTheme(CountDown);