"use client"

import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ErrorPage: NextPage = () => {
   const router = useRouter();
   const errorCode = router.query.errorCode;

   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <h1 className="text-4xl font-bold mb-4">Error</h1>
         <p className="text-lg mb-8">An error occurred. Error Code: {errorCode}</p>
         <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none"
            onClick={() => router.push('/')}
         >
            Go back to Home
         </button>
      </div>
   );
};

export default ErrorPage;
