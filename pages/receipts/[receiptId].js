import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "app/globals.css";
import ReceiptPage from "../../components/ReceiptPage";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NotFound from "@/components/NotFound";

export default function Receipt() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const extractReceiptIdFromPath = (path) => {
    const match = path.match(/\/receipts\/(.+)/);
    return match ? match[1] : null;
  };

  const receiptId = extractReceiptIdFromPath(router.asPath);
  const [receipt, setReceipt] = useState(null);




  useEffect(() => {
    if (receiptId) {
      const receipt = getReceiptFromLocalStorage(receiptId);
      setReceipt(receipt);
      
    }
  }, [receiptId]);


  const getReceiptFromLocalStorage = (receiptId) => {
    const receipt = JSON.parse(localStorage.getItem('reportsRentok_'+receiptId));
    return receipt;
  };


  return (
    <div>
    <Navbar/>
    {
    receipt ? (
      <ReceiptPage receipt={receipt} receiptId={'reportsRentok_' + receiptId} />
    ) : (
      <NotFound />
    )
}
      <Footer/>
    </div>
  );
}
