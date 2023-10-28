import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 


  const router = useRouter();
  const handleSignUp = () => {
   
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/i;


    if(!email && ! password){
      alert("Please enter email and password")
      return;
    } else if(!email){
      alert("Email can't be empty")
      return;
    }else if(!password){
      alert("Password can't be empty")
      return;
    }else if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return; 
    } else if (password.length < 8 || password.length > 15) {
      alert('Password must be between 8 and 15 characters.');
      
      return;
    }
  
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Sign-up successful! You can now log in.');
    router.push('/login')
    
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center mt-60">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
      <div className='flex w-full'>
      <svg class="h-8 w-8 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
</svg>
        <h2 className="text-2xl font-bold mb-4 text-gray-700 ml-3">Sign Up</h2>
        </div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />



        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? (
              <svg class="h-6 w-6 text-blue-600 mb-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg>
            ) : (
              <svg class="h-6 w-6 text-blue-600 mb-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />  <line x1="1" y1="1" x2="23" y2="23" /></svg>
            )}
          </span>
        </div>

        <button
          onClick={handleSignUp}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Sign Up
        </button>
        <Link href="/login">
        <p className='text-blue-600 underline underline-offset-[5px] text-right mt-3'>
        Login</p>
        </Link>
      </div>
    </div>
  );
};

export default SignUpComponent;
