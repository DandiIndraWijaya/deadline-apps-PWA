import React from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import DeadLineList from './pages/DeadLineList';

const theme = {
  color: {
    primary: {
      skyblue: '#8BEAFF',
      lightgrey: '#c4c4c4',
      oldgrey: 'grey'
    },
    background: 'white'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DeadLineList />
    </ThemeProvider>
  );
}

export default App;
