export default function ReceiptPage({receipt, receiptId}){
    const idWithoutPrefix = receiptId.replace("reportsRentok_", "");
    const formatNumber = (num) => {
        if (num >= 1000) {
          return `${num / 1000} K`;
        } else {
          return num;
        }
      }
   return( <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 new-shadow"
    style={{ width: "100vw", maxWidth: "1200px" }}
  >
    <div className="bg-white  border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center py-5 bg-blue-900 text-white rounded-t-lg">
        Property {receipt.property} {new Date().getFullYear()}
      </h2>
      <div className="text-gray-600 px-5 py-8 flex flex-wrap overflow-auto">
  <div className="mb-2 w-1/2">
    <h3 className="text-lg font-semibold">Tenant Name</h3>
    <p className="truncate-text" title={receipt.tenantName}>
      {receipt.tenantName && receipt.tenantName.length > 50 ? receipt.tenantName.slice(0, 50) + '...' : receipt.tenantName}
    </p>
  </div>
  <div className="mb-2 w-1/2">
    <h3 className="text-lg font-semibold">Tenant ID</h3>
    <p className="truncate-text" title={receipt.tenantId}>
      {receipt.tenantId && receipt.tenantId.length > 50 ? receipt.tenantId.slice(0, 50) + '...' : receipt.tenantId}
    </p>
  </div>
  <div className="mb-2 w-1/2">
    <h3 className="text-lg font-semibold">Address</h3>
    <p className="truncate-text" title={receipt.address}>
      { receipt.address && receipt.address.length > 50 ? receipt.address.slice(0, 50) + '...' : receipt.address}
    </p>
  </div>
  <div className="mb-2 w-1/2">
    <h3 className="text-lg font-semibold">Amount</h3>
    <p>&#8377; {formatNumber(receipt.amount)}</p>
  </div>
</div>



      <div className="flex justify-between text-gray-600 px-5 py-8 border-t-4 border-indigo-500">
        <div>
          <p className="text-md"><strong>Receipt No:</strong> {idWithoutPrefix}</p>
        </div>
        <div>
          <p className="text-md"><strong>Time:</strong> {receipt.timestamp}</p>
        </div>
      </div>
    </div>
  </div>
   );
}