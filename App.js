import logo from './logo.svg';
import './App.css';
import Signup from './pages/sigup';
import React, {useEffect} from "react"
import Axios  from 'axios';

function App() {
  const [fname,setfname]= React.useState("");
  const [lname,setlname]= React.useState("");
  const [job,setjob]=React.useState("");
  const [mail,setmail]=React.useState(0);
  const [contact,setContact]=React.useState(0);
  const [employeeList,setEmployeeList]=React.useState([]);
  const [newEmployeeName,setNewEmployeeName]= React.useState("");
  
  useEffect(()=>{
    Axios.get("http://localhost:3000/read").then(response =>{
      setEmployeeList(response.data);
    })
  })


  const addTolist=()=>{
    Axios.post('http://localhost:3000/insert',{fname:fname,lname:lname , job:job, mail:mail, contact:contact})
  }
  return (
    <div className="App">
      <Signup/>
      
    </div>
  );
}

export default App;
