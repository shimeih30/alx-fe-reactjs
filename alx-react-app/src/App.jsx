import UserProfile from './components/UserProfile';
import './App.css';

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