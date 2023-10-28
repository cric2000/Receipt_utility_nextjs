import Link from "next/link";

export default function NotFound(){
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
          <div>
            <h1 className="text-3xl font-semibold text-gray-600 text-center">Oops! Receipt not found</h1>
          </div>
          <div>
          <Link href="/" style={{fontSize:'20px'}}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-full mt-10">
            Go to Home
            </button>
            </Link>
          </div>
        </div>
    );
}