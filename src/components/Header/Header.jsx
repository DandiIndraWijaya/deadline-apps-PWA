import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const StyledHeader = styled.header`
    padding: 15px 10px;
    background-color: ${props => props.theme.color.primary.skyblue};
    color: white;
`;

class Header extends React.Component {


    render(){
        const { theme, showFormToggle, showForm } = this.props;
        return (
            <section>
                <StyledHeader theme={theme}>
                    <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>My Deadline</h1>
                </StyledHeader>
                <Button onClick={showFormToggle} text={showForm ? 'Finnish' : 'New Task'} backgroundColor="white" margin="5px" color={theme.color.primary.skyblue} fontSize="18px" />
            </section>
        )
    }

    static propTypes = {
        showForm: PropTypes.bool.isRequired,
        showFormToggle: PropTypes.func.isRequired
    }
}

export default withTheme(Header);