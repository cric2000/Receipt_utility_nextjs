import Login from '../components/LoginComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'app/globals.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const LoginPage = () => {

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(storedIsLoggedIn);

      if(isLoggedIn){
        console.log('hi')
        router.push('/')
      }
    }
, []);

  return (
    <div>
    <Navbar/>
      <h1>Log in Page</h1>
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginPage;
