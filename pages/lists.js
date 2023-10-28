import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReceiptList from "../components/ReceiptList";
import 'app/globals.css'


const ListPage = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    const getReportKeysFromLocalStorage = () => {
      const reportKeys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("reportsRentok_")) {
          reportKeys.push(key);
        }
      }
      return reportKeys;
    };

    const reportKeys = getReportKeysFromLocalStorage();
    setLocalStorageKeys(reportKeys);
    if (reportKeys.length === 0) {
        router.push('/error');
      }
    }, [router]);

  return (
    <div>
    <Navbar/>
    <ReceiptList localStorageKeys={localStorageKeys} />
    <div className="flex justify-center">
    <Link href="/" style={{ fontSize: "20px" }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-full mt-10">
        
            Go to Home
         
        </button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default ListPage;
