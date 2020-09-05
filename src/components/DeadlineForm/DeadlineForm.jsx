import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Container from '../../layout/Container';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

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
    state = {
        mataKuliah: '',
        tugas: '',
        due: ''
    }

    handleOnChangeMatkul = e => {
        this.setState({
            mataKuliah: e.target.value
        })
    }

    handleOnChangeTugas = e => {
        this.setState({
            tugas: e.target.value
        })
    }

    handleOnChangeDeadline = e => {
        this.setState({
            due: e.target.value
        })
    }

    handleForSubmit = e =>{
        
        const { addDeadline } = this.props;
        const { mataKuliah, tugas, due } = this.state;
        e.preventDefault();

        if(mataKuliah === '' || tugas === '' || due === ''){
            alert("Form harus diisi semua");
            return;
        }
            addDeadline(mataKuliah, tugas, due);
            this.setState({
                mataKuliah: '',
                tugas: '',
                due: ''
            });
        
    }

    render(){
        const { mataKuliah, tugas, due } = this.state;
        const { theme, showForm } = this.props;

        if(showForm){
            return (
                <form onSubmit={this.handleForSubmit}>  
                    <Container>
                        <StyledItem>
                            <StyledLabel theme={theme} id="matkul">Mata Kuliah</StyledLabel>
                            <br></br>
                            <StyledInput
                                onChange={this.handleOnChangeMatkul} 
                                value={mataKuliah} 
                                theme={theme} 
                                type="text" 
                                id="matkul"
                            />
                        </StyledItem>
    
                        <StyledItem>
                            <StyledLabel theme={theme} id="tugas">Tugas</StyledLabel>
                            <br></br>
                            <StyledInput
                                onChange={this.handleOnChangeTugas} 
                                value={tugas} 
                                theme={theme} 
                                type="text" 
                                id="tugas" 
                            />
                        </StyledItem>
    
                        <StyledItem>
                            <StyledLabel theme={theme} id="deadline">Deadline</StyledLabel>
                            <br></br>
                            <StyledInput
                                onChange={this.handleOnChangeDeadline} 
                                value={due} 
                                theme={theme} 
                                type="text" 
                                id="deadline" 
                            />
                        </StyledItem>
    
                        <StyledItem>
                            <Button text="Tambah" color="white" backgroundColor={theme.color.primary.skyblue} margin="24px 0px"  />
                        </StyledItem>
                        
                    </Container>
                </form>
            )
        }else{
            return null;
        }
        
    }

    static propTypes = {
        addDeadline: PropTypes.func.isRequired
    }
}

export default withTheme(DeadlineForm);