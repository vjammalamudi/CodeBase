
import React, { useState, Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import { userGet, todoGet} from '../../api/api';
import TodoInfo from './TodoInfo';

userGet();

function TaskTwo (props) {
  let resData = [], resultData = [];
  let i, usernames = [];
  if (props.userData.userdata[0] != undefined) {
    for (i = 0; i <= 9; i++) {
      usernames.push(props.userData.userdata[i].username)
    }
  }
  const [username, setUsername] = useState([
    usernames
  ]);

  const [resultingData, setresultData] = useState("");

  const [name, setName] = useState("");
  let data;

  const usersList = usernames.map (key => key.toLowerCase())
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      if (usersList.indexOf(name.toLowerCase()) < 0) {
        alert (`User ${name} not found`)
      } else {
        let data = props.userData.userdata;
        resData = data.filter (key => key.username.toLowerCase() == name.toLowerCase())
        setresultData(resData)
      }
  }

  return (
   <div className="task-two-container">
     <h1>Task Two</h1>    
      <form>
        <div className="username-search">
          <input type="text" name="search" placeholder="Search for the username" value={name} onChange={e => setName(e.target.value)} />
          <button onClick = {handleSubmit}>Submit</button>
        </div>
      </form>
    <div>{(resultingData.length > 0 && resultingData!= null) ?  (
      <div>
        <table className="user-list-table" >
            <tbody>
              <tr>
                  <th>Username </th>
                  <th>Email </th>
                  <th>Website </th>
                </tr>
                <tr>
                  <td> { resultingData[0].username }</td>
                  <td >{resultingData[0].email} </td>
                  <td >{resultingData[0].website} </td>
                </tr> 
            </tbody>
          </table>
      </div>
      ) : " "}
    </div>
    {(resultingData.length > 0 && resultingData!= null) ? 
    <TodoInfo userID = {resultingData[0].id}/> : ""}
  </div>      
  );  
}

const mapStateToProps = (state) => {
	return { userData:state.user }
}

export default connect(mapStateToProps,null)( TaskTwo);   