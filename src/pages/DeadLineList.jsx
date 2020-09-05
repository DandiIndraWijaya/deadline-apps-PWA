import React from 'react';
import Screen from '../components/Screen/Screen';
import Header from '../components/Header/Header';
import DeadlineForm from '../components/DeadlineForm/DeadlineForm';
import Deadline from '../components/Deadline/Deadline';



class DeadLineList extends React.Component{
    state = {
        showForm: false,
        deadlines: [],
        index: null
    }

    componentDidMount(){
        const deadlinesLocalStorage = JSON.parse(localStorage.getItem('myDeadlinesApps')) || [];
        this.setState({
            deadlines: deadlinesLocalStorage
        })
    }

    componentDidUpdate(){
        localStorage.setItem('myDeadlinesApps', JSON.stringify(this.state.deadlines));
    }

    showFormToggle = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    addDeadline = (mataKuliah, tugas, due) => {
        const { deadlines } = this.state;
        const addedDeadline = [...deadlines, {mataKuliah: mataKuliah, tugas: tugas, due: due}];
        this.setState({
            deadlines: addedDeadline
        });
    }



    deleteDeadline = e => {
        const index = e.target.dataset.index; 
        const { deadlines } = this.state;
        deadlines.splice(index, 1);
        this.setState({
            deadlines: deadlines
        })
    }
    

    render(){
        const { showForm } = this.state;
        const { deadlines } = this.state;

        return (
            <Screen>
                <Header showForm={showForm} showFormToggle={this.showFormToggle} />
                <DeadlineForm showForm={showForm} addDeadline={this.addDeadline}  />
                <hr/>
                <Deadline deadlineIndex={this.state.index} deleteDeadline={this.deleteDeadline} deadlines={deadlines} />
            </Screen>
        )
    }
}


export default DeadLineList;