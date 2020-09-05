import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Container from '../../layout/Container';
import Button from '../Button/Button';

const StyledItem = styled.div`
    margin-top: 10px;
`;

const StyledLabel = styled.label`
    color: ${props => props.theme.color.primary.oldgrey};
    font-size: 12pt;
`;

const StyledInput = styled.input`
    color: grey;
    font-size: 12pt;
    border: unset;
    outline: unset;
    border: ${props => props.theme.color.primary.lightgrey} solid 2px;
    border-radius: 8px;
    padding: 5px;
    &:focus{
        border: 2px solid ${props => props.theme.color.primary.skyblue};
      }
`;

class DeadlineForm extends React.Component {
    render(){
        const { theme } = this.props;

        return (
            <Container>
                <StyledItem>
                    <StyledLabel theme={theme} id="matkul">Mata Kuliah</StyledLabel>
                    <br></br>
                    <StyledInput theme={theme} type="text" id="matkul"></StyledInput>
                </StyledItem>

                <StyledItem>
                    <StyledLabel theme={theme} id="tugas">Tugas</StyledLabel>
                    <br></br>
                    <StyledInput theme={theme} type="text" id="tugas"></StyledInput>
                </StyledItem>

                <StyledItem>
                    <StyledLabel theme={theme} id="deadline">Deadline</StyledLabel>
                    <br></br>
                    <StyledInput theme={theme} type="text" id="deadline"></StyledInput>
                </StyledItem>

                <StyledItem>
                    <Button text="Tambah" backgroundColor={theme.color.primary.skyblue} margin="24px 0px"  />
                </StyledItem>
                
            </Container>
        )
    }
}

export default withTheme(DeadlineForm);