import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  const handleLogout = () => {
    const isConfirmed = window.confirm('Are you sure you want to log out');

    if (isConfirmed && isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      router.push('/');
      router.reload();
    }
  };



  return (
    <header className="bg-gray-800 flex items-center justify-between py-4 px-4 fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between w-full">
      <div className='flex items-center'>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#D4F1F4" viewBox="0 0 18 20">
          <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
      </svg>
      <Link href="/">
        <h1 className="text-2xl ml-2" title="Go to home">
          ReCeipt
        </h1>
        
      </Link>
      </div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="ml-4 bg-blue-500 hover-bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
