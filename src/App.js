import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';



function App() {
  return (
    <div className="App">
     <Router>
        {/* Defining different Routes using Routes and Route components */}
        <Routes>
         
          <Route exact path='/' element={<Home/>} />
           
          <Route exact path="/signin" element={<Signin/>} />
           
          <Route exact path='/signup' element={<Signup/>} />

          <Route exact path='/profile' element={<Profile/>} />
          
          {/* <Route exact path='/profile' element={<Profile userId={userId}/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
