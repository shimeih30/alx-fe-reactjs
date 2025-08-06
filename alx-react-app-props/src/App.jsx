import UserProfile from './components/UserProfile';
import './App.css';
import ProfilePage from './ProfilePage';
import UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

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