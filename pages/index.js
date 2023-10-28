import ReceiptForm from "../components/ReceiptForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import 'app/globals.css'
import { useEffect } from "react";

export default function Main() {
  const router = useRouter();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
      router.push('/'); 
    }
    else{
      router.push('/signup')
    }
  });


  return (
    <div className="bg-gray-200 min-h-screen flex flex-col text-white">
      <Navbar/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-gray-700 text-3xl text-md font-semibold text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Streamline Your Experience with Instant Receipts
        </p>
       <ReceiptForm/>
      </div>
    <Footer/>
    </div>
      );
}
