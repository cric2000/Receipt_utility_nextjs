import Navbar from '../components/Navbar';
import SignUp from '../components/SignUpComponent';
import Footer from '../components/Footer';
import 'app/globals.css'

const SignUpPage = () => {
  return (
    <div>
    <Navbar/>
      <h1>Sign Up Page</h1>
      <SignUp />
      <Footer/>
    </div>
  );
};

export default SignUpPage;
