import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    margin: ${props => props.margin};
    margin-bottom: 0px;
    border: unset;
    outline: unset;
    background-color: ${props => props.backgroundColor};
    color: white;
    font-weight: bolder;
    padding: 5px;
    cursor: pointer;
    border-radius: 8px;
`;

class Button extends React.Component {
    render(){
        const { text, backgroundColor, margin } = this.props;

        return(
            <StyledButton margin={margin} backgroundColor={backgroundColor}>
                {text}
            </StyledButton>
        )
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        margin: PropTypes.string.isRequired
    }
}

export default withTheme(Button);