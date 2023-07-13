"use client"
import Alert from '@/components/Alert'
import Head from 'next/head'
import { useState } from 'react';

export default () => {
   const [showAlert, setShowAlert] = useState(false);

   const handleOK = () => {
      console.log('OK clicked');
      setShowAlert(false);
   }

   const buttons = [
      { label: 'OK', onClick: handleOK },
      { label: 'Cancel',onClick: () => { 
                           console.log('Cancel clicked'); 
                           setShowAlert(false);
                        } 
   
      },
   ];

   const togleAlert = () => {setShowAlert(!showAlert)}

   return (
      <>
         <Head>
            <title>Contact</title>
         </Head>
         <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={togleAlert}
         >
            Togle Alert
         </button>
            <Alert
               visible={showAlert}
               title="Alert Title"
               mainText="This is the main text of the alert."
               buttons={buttons}
            />
      </>
   )
}
