import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Container from '../../layout/Container';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime-picker';

const StyledItem = styled.div`
    margin-top: 5px;
`;

const StyledLabel = styled.label`
    color: ${props => props.theme.color.primary.oldgrey};
    font-size: 12pt;
`;

const StyledDateTimePicker = styled.div`
    color: grey;
    font-size: 10pt;
    border: unset;
    outline: unset;
    padding: 5px;
    
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
        task: '',
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    handleOnChangeTask = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleOnChangeDeadline = e => {
        this.setState({
            due: e.target.value
        })
    }

    handleForSubmit = e =>{
        
        const { addDeadline } = this.props;
        const { task, date } = this.state;
        e.preventDefault();

        if(task === '' || date === ''){
            alert("Form harus diisi semua");
            return;
        }
            addDeadline(task, date);
            this.setState({
                task: '',
                date: ''
            });
        
    }

    render(){
        const { task, date } = this.state;
        const { theme, showForm } = this.props;

        if(showForm){
            return (
                <form onSubmit={this.handleForSubmit}>  
                    <Container>
                        <StyledItem>
                            <StyledLabel theme={theme} id="task">Task</StyledLabel>
                            <br></br>
                            <StyledInput
                                onChange={this.handleOnChangeTask} 
                                value={task} 
                                theme={theme} 
                                type="text" 
                                id="task"
                            />
                        </StyledItem>
    
                        <StyledItem>
                            <StyledLabel theme={theme} id="deadline">Deadline</StyledLabel>
                            <br></br>
                            <StyledDateTimePicker>
                                <DateTimePicker
                                locale="id-ID"
                                format="dd-MM-y h:mm a"
                                onChange={this.onChange}
                                value={date}
                                />
                            </StyledDateTimePicker>
                        </StyledItem>
    
                        <StyledItem>
                            <Button text="Add" color="white" backgroundColor={theme.color.primary.skyblue} margin="3px 5px"  />
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