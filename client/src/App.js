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
import LoginScreen from './components/pages/Login/Login Screen';
import RegisterScreen  from './components/pages/Login/Register Screen';
import ForgotPassword from './components/pages/Login/Forgot Password';
import ResetPassword from './components/pages/Login/Reset Password';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/pages/Login/PrivateScreen';

function App() {
  return (
<>
<Router>
       <Navbar /> 
      
      <Routes>
       <Route path='/' exact element={<Home />} />
        <Route path='/recipes' exact element={<Recipes />} />
        <Route path='/about-me' exact element={<AboutMe />} />
        <Route path='/login' exact element={<LoginScreen />} />
        <Route path='/register' exact element={<RegisterScreen />} />
        <Route path='/forgotpassword' exact element={<ForgotPassword />} />
        <Route path='/passwordreset/:resetToken' exact element={<ResetPassword />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/write' exact element={<Write />} />
        <Route path='/blog/single' exact element={<Single />} /> 
      </Routes>
       <Footer />
      </Router>
      
</>

  );
}

export default App;
