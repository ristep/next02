"use client"
import Alert from '@/components/Alert'
import Button from '@/components/Button';
import Head from 'next/head'
import { useState } from 'react';

const Contact = () => {
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
                        }, color: "red" 
      },
   ];

   const togleAlert = () => {setShowAlert(!showAlert)}

   return (
      <div suppressHydrationWarning={true}>
         <Head>
            <title>Contact</title>
         </Head>
         <Button
            label = "Togle Alert"
            callback={togleAlert}
         />
            <Alert
               visible={showAlert}
               title="Alert Title"
               mainText="This is the main text of the alert."
               buttons={buttons}
            />
      </div>
   )
}

export default Contact;