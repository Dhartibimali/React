import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react'
const App = () => {
  const[tasks, setTasks] = useState([
    {
        id:1,
        text:'Learn React',
        day:'Jan 2nd at 10Am',
        reminder: true,
    },
    {
        id:2,
        text:'which is a libaray ',
        day:'Jan 2th at 10Am',
        reminder: true,
    },
    {
        id:3,
        text:'of js ',
        day:'Jan 3rd at 1pm',
        reminder: false,
    },
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
