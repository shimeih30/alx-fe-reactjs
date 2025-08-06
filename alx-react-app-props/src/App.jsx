import UserProfile from './components/UserProfile';
import './App.css';
import ProfilePage from './ProfilePage';
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    age: 30
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;


export default App;

function App() {
  return (
    <div className="App">
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys cooking and traveling" 
      />
    </div>
  );
}

export default App;