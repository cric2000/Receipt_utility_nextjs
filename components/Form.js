import React from "react";
import InputField from "./InputField";
import GenerateReceiptButton from "./GenerateReceiptButton";

export default function Form({
  tenantName,
  setTenantName,
  address,
  setAddress,
  tenantId,
  setTenantId,
  amount,
  setAmount,
  errors,
  generateReceipt,
  setErrors,
  button,
  getId
}) 
{
  return (
    <div>
   <form className="mx-auto my-4 p-10 bg-white rounded-lg shadow-md new-shadow" style={{ maxWidth: '800px', width: '100vw' }}>
      <InputField
        label="Tenant Name"
        id="tenantName"
        value={tenantName}
        onChange={setTenantName}
        error={errors.tenantName}
        type="text"
        setErrors={setErrors}
        placeholder="eg : Anmol Lamba"
      />
      <InputField
        label="Address"
        id="address"
        value={address}
        onChange={setAddress}
        error={errors.address}
        type="text"
        setErrors={setErrors}
        placeholder="eg : sec 22 chandigarh"
      />
      <InputField
        label="Room name"
        id="tenantId"
        value={tenantId}
        onChange={setTenantId}
        error={errors.tenantId}
        type="text"
        setErrors={setErrors}
        placeholder="eg : 26"
      />
      <InputField
        label="Fixed Rent (&#8377;)"
        id="amount"
        value={amount}
        onChange={setAmount}
        error={errors.amount}
        type="number"
        setErrors={setErrors}
      />
      <div className="flex items-center justify-end flex-wrap">
      <GenerateReceiptButton onClick={generateReceipt} message="Generate Receipt" color="bg-blue-500"/>
      <GenerateReceiptButton onClick={getId} message="View Receipt" color="bg-green-500" />
      </div>
    
    </form>
    </div>
  );
}
