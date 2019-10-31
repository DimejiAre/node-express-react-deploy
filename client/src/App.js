import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4000'
  : ''

function App() {

  const [friends,setFriends] = useState([]);

  useEffect(()=>{
    axios.get(baseUrl + '/api/friends')
      .then(res => {
        setFriends(res.data)
      })
  },[])
  return (
    <div className="App">
      {friends?
      friends.map(friend => (
        <div>Name: {friend.name} id: {friend.id}</div>
      ))
    : null}
    </div>
  );
}

export default App;
