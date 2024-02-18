import { useSelector } from 'react-redux';
import './App.css';
import { Login } from './components/Login';


function App() {
  const userLogin = useSelector( state=> state.userDatails)
  return (
    <div className="App">
      {
        userLogin.map(user=> <div>
          {user.name}
          {user.password}
           </div>)
      }
      <Login/>
  
      
    </div>
  );
}

export default App;
