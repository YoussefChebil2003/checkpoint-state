// import logo from './logo.svg';
import './App.css';
import MainNavBar from './components/navbar';
import Profile from './components/profile'

function App() {
  return (
    <div className='App'>
      <MainNavBar></MainNavBar>
            <div className="checkpoint-box">
                <Profile/> 
            </div>
    </div>
  );
}

export default App;
