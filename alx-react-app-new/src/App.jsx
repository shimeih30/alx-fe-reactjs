import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';

["Counter"]

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      position: 'relative',
      paddingBottom: '60px' // Footer height + some extra space
    }}>
      <Header />
      <div style={{ padding: '20px' }}>
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
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;