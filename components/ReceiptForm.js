import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Alert from "./alert";
import { useRouter } from "next/router";
import SignUpComponent from "./SignUpComponent";

export default function ReceiptForm() {
  const [tenantName, setTenantName] = useState("");
  const [address, setAddress] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [button, setButton]= useState(true);
  const [id, setId]=useState(false);
  const [generatedReceipt, setGeneratedReceipt] = useState(null);
  const router = useRouter();


 // Function to validate the input fields and return a new errors object
const validateInputFields = () => {
  const newErrors = {};

  if (!tenantName) {
    newErrors.tenantName = "Tenant Name is required";
  } else if(tenantName.length < 3){
    newErrors.tenantName = "Tenant Name can't be less than 3 characters";
  }else if(tenantName.length >  50){
    newErrors.tenantName = "Tenant Name can't be more than 50 characters";
  }
  else {
    delete newErrors.tenantName;
  }
  if (!address) {
    newErrors.address = "Address is required";
  }else if(address.length<10){
    newErrors.address = "Address can't be less than 10 characters";
  } else if(address.length > 200){
    newErrors.address = "Address can't be more than 200 characters";
  }else {
    delete newErrors.address;
  }
  if (!tenantId) {
    newErrors.tenantId = "Room name is required";
  } else if(tenantId.length > 50){
    newErrors.tenantId = "Room name can't be more than 50 characters";
  }else {
    delete newErrors.tenantId;
  }
  if (amount <= 0) {
    newErrors.amount = "Amount must be greater than zero";
  } else {
    delete newErrors.amount;
  }

  return newErrors;
};


// Function to handle the generation of a new receipt
const handleGenerateReceipt = (newErrors) => {
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  const receiptId = 'reportsRentok_'+uuidv4();

  console.log(receiptId)

  const receipt = {
    property: "Receipt",
    address,
    tenantName,
    tenantId,
    amount,
    timestamp: new Date().toLocaleString(),
  };

console.log(receipt)
  try {

    localStorage.setItem(receiptId, JSON.stringify(receipt));
  
    setErrors({});
    setGeneratedReceipt({ id: receiptId, ...receipt });
    setTenantName("");
    setAddress("");
    setTenantId("");
    setAmount(0);
    setShowAlert(true);
    setButton(false);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  } catch (error) {
    console.error("Failed to store receipt in local storage:", error);
  }
};

// Main generateReceipt function
const generateReceipt = () => {
  const newErrors = validateInputFields();
  handleGenerateReceipt(newErrors);
};

const getId = () => {
  setId(true);
  router.push("/lists");
};

  return (
<div>
    <Form
      tenantName={tenantName}
      setTenantName={setTenantName}
      address={address}
      setAddress={setAddress}
      tenantId={tenantId}
      setTenantId={setTenantId}
      amount={amount}
      setAmount={setAmount}
      errors={errors}
      generateReceipt={generateReceipt}
      setErrors={setErrors}
      button={button}
      getId={getId}
    />



  <Alert showAlert={showAlert}  message="Receipt generated successfully" color="bg-green-200" />

</div>

  );
}
