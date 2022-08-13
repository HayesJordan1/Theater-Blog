import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import SignUp from './components/pages/Sign-Up';
import AboutMe from './components/pages/About-Me';
import Footer from './components/Footer';
import Blog from './components/pages/Blog';
import Single from './components/pages/single/Single';
import Write from './components/pages/Write/Write';
import LoginScreen from './components/Login/Login Screen';
import Register  from './components/Login/Register Screen';
import ForgotPassword from './components/Login/Forgot Password';
import ResetPassword from './components/Login/Reset Password';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/Login/PrivateScreen';
import { useContext } from 'react';
import { Context } from './context/context';
import Settings from './components/pages/Settings/Settings';

function App() {
  const {user }= useContext(Context);
  return (
<>
<Router>
       <Navbar /> 
      
      <Routes>
       <Route path='/' exact element={<Home />} />
        <Route path='/recipes' exact element={<Recipes />} />
        <Route path='/about-me' exact element={<AboutMe />} />
        <Route path='/login' exact element={user? <Home /> : <LoginScreen />} />
        <Route path='/register' exact element={user? <Home /> : <Register />} />
        <Route path='/forgotpassword' exact element={<ForgotPassword />} />
        <Route path='/passwordreset/:resetToken' exact element={<ResetPassword />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/write' exact element={user? <Write /> : <Register />} />
        <Route path='/post/:id' exact element={<Single />} /> 
        <Route path='/settings' exact element={<Settings />} /> 
        
      </Routes>
       <Footer />
      </Router>
      
</>

  );
}

export default App;
