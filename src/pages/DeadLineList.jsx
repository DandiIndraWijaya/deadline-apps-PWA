import React from 'react';
import Screen from '../components/Screen/Screen';
import Header from '../components/Header/Header';
import DeadlineForm from '../components/DeadlineForm/DeadlineForm';
import Deadline from '../components/Deadline/Deadline';



class DeadLineList extends React.Component{
    state = {
        showForm: false,
        deadlines: [
            { mataKuliah: "Web Programming", tugas: "Membuat Layout Web", due: "28 September 2020" },
            { mataKuliah: "Praktikum Web Programming", tugas: "Membuat Layout Web", due: "15 September 2020" },
            { mataKuliah: "Media", tugas: "Membuat Brosur", due: "5 September 2020" },
        ]
    }

    showFormToggle = () => 
        this.setState({
            showForm: !this.state.showForm
        });

    addDeadline = (mataKuliah, tugas, due) => {
        const { deadlines } = this.state.deadlines;
        const addedDeadline = [...deadlines, {mataKuliah: mataKuliah, tugas: tugas, due: due}];
        this.setState({
            deadlines: addedDeadline
        })
    }
    

    render(){
        const { showForm } = this.state;
        const { deadlines } = this.state;

        return (
            <Screen>
                <Header showForm={showForm} showFormToggle={this.showFormToggle} />
                <DeadlineForm showForm={showForm}  />
                <hr/>
                <Deadline deadlines={deadlines} addDeadline={this.addDeadline}  />
            </Screen>
        )
    }
}


export default DeadLineList;