import React from "react";
import Link from "next/link";

const ReceiptList = ({ localStorageKeys }) => {
  return (
    <div style={{marginTop:'100px'}} className="text-center">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700 mb-5">Click to see Receipts</h1>
      <ul className="list-style-none">
        {localStorageKeys.map((key, index) => {
          const keyWithoutPrefix = key.replace("reportsRentok_", "");
          return (
            <li key={index} className="mb-2">
              <Link href={`/receipts/${keyWithoutPrefix}`} className="text-blue-500 hover:underline">
                {key}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReceiptList;
