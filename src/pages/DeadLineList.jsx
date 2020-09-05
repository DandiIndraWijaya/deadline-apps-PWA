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
        let newDeadlines = JSON.parse(localStorage.getItem('myDeadlinesApps')) || [];

        this.setState({
            deadlines: newDeadlines
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

    addDeadline = (task, due) => {
        const { deadlines } = this.state;
        const addedDeadline = [...deadlines, {task: task, due: due}];

        let newDeadlines = addedDeadline;

        if(deadlines.length !== 0){
            let len = newDeadlines.length -1;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                console.log(newDeadlines[i].due)
                let now = new Date().getTime();
                let deadlineJ = new Date(newDeadlines[i].due).getTime() - now;
                let deadlineI = new Date(newDeadlines[i+1].due).getTime() - now;
                if (deadlineJ > deadlineI) {
                    let tmp = newDeadlines[i];
                    newDeadlines[i] = newDeadlines[i + 1];
                    newDeadlines[i + 1] = tmp;
                    swapped = true;
                }
            }
        } while (swapped);
        }
        this.setState({
            deadlines: []
        });

        this.setState({
            deadlines: newDeadlines
        });
    }



    deleteDeadline = e => {
        const index = e.target.dataset.index; 
        const { deadlines } = this.state;
        deadlines.splice(index, 1);
        this.setState({
            deadlines: deadlines
        });
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