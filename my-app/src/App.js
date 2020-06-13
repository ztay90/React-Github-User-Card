import React from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import UserFollowers from './components/userFollowers';

function App() {
  return(
    <div className="App">
      <h1>My Github</h1>
      <UserProfile />
      <h1>Followers</h1>
      <UserFollowers />
    </div>
  )
}

export default App;
