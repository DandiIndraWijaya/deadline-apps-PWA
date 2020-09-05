import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    margin: ${props => props.margin};
    font-size: ${props => props.fontSize};
    border: unset;
    outline: unset;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-weight: bolder;
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
    &:active{
        text-shadow: 1px 1px 2px ${props => props.color};
    }

    @media (max-width: 600px) {
        margin: 5px 5px;
    }
`;

class Button extends React.Component {
    render(){
        const { text, color, backgroundColor, margin, fontSize, onClick, index } = this.props;

        return(
            <StyledButton data-index={index} onClick={onClick} fontSize={fontSize} color={color} margin={margin} backgroundColor={backgroundColor}>
                {text}
            </StyledButton>
        )
    }

    static defaultProps = {
        fontSize: '14px'
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        margin: PropTypes.string,
        onClick: PropTypes.func
    }
}

export default withTheme(Button);