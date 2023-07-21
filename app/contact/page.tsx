"use client"
import Alert from '@/components/rpui/Alert'
import Button from '@/components/rpui/ButtonNeon';
import ButtonNeon from '@/components/rpui/ButtonNeon';
// import { Button as ButtonUI } from "@/components/rpui/ButtonV"
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
      {
         label: 'Cancel', onClick: () => {
            console.log('Cancel clicked');
            setShowAlert(false);
         }, color: "red"
      },
   ];

   const togleAlert = () => { setShowAlert(!showAlert) }

   return (
      <div suppressHydrationWarning={true}>
         <Head>
            <title>Contact</title>
         </Head>

         <ButtonNeon callback={togleAlert} >
            Leprakon
         </ButtonNeon>

         <ButtonNeon color="blue" label='Test Button' callback={togleAlert} />
         <ButtonNeon color="red" label='Test Button' callback={togleAlert} />
         <ButtonNeon color="yellow" label='Submit' callback={togleAlert} type='submit'/>
         <Button color="green" label='Reset' callback={togleAlert} type='reset' active={false} />
         <Button color="slate" label='Reset' callback={togleAlert} type='reset' />
         <Button color="sky" label='Reset' callback={togleAlert} type='reset' />
         <Button color="orange" label='Reset' callback={togleAlert} type='reset'><p>Children</p></Button>

         <p>Disabled</p>

         <Button color="blue" label='Test Button' callback={togleAlert} active={false}/>
         <Button color="red" label='Test Button' callback={togleAlert} active={false}/>
         <Button color="yellow" label='Submit' callback={togleAlert} type='submit' active={false} />
         <Button color="green" label='Reset' callback={togleAlert} type='reset' active={true}/>
         <Button color="slate" label='Reset' callback={togleAlert} type='reset' active={false}/>
         <Button color="sky" label='Reset' callback={togleAlert} type='reset' active={false}/>
         <Button color="orange" label='Reset' callback={togleAlert} type='reset' active={false}/>


         {/* <ButtonUI variant="destructive" onClick={togleAlert}>
            <h2>Button UI</h2>
         </ButtonUI> */}

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