"use client"
import React, { useState, useEffect } from 'react';
import { ObjectView } from 'react-object-view';
import Alert from '@/components/rpui/Alert';
import Button from '@/components/rpui/Button3D';
import axios from 'axios';

const getIpUrl = "https://sman.cloud/ip_log/get_last_ip.php";

const options = {}
const palette = {}
const styles = {}

const Lambi = () => {

   const [pins, setPins] = useState(["1", "1", "1", "1", "1", "1", "1", "1"]);
   const [showAlert, setShowAlert] = useState(false);
   const [lastIP, setLastIP] = useState({});
   const [baseURL, setBaseURL] = useState("https://lapi-smanzy.bot.nu/lampiAPI.php");

   const handleOK = () => {
      console.log('OK clicked');
      setShowAlert(false);
   };

   const buttons = [
      { label: 'OK', onClick: handleOK },
      {
         label: 'Cancel', onClick: () => {
            console.log('Cancel clicked');
            setShowAlert(false);
         }, color: "red"
      },
   ];

   const togleAlert = () => { setShowAlert(!showAlert); };

   const osvez = () => {
      console.log('osvez');
      axios.get(baseURL, { params: { osvez: true } });
   };

   const light = (ndx) => {
      return pins[ndx] === '0';
   };

   const togleLamba = (pin) => {
      console.log('Clicked = ' + pin);
      console.log(baseURL, { params: { pin: pin, val: light(+pin) ? 'off' : 'on' } });
      axios.get(baseURL, { params: { pin: pin, val: light(+pin) ? 'off' : 'on' } })
         .then(res => {
            console.log('res: ', res);
            setPins(String(res.data).split(''));
         });
   };

   useEffect(() => {
      axios.get(getIpUrl)
         .then(res => {
            console.log('res.data: ', res.data);
            setLastIP(res.data);
         });
   }, [] );

   // useEffect(() => {
   //    setBaseURL(`https://${lastIP.ip}/pins/lampiAPI.php`);
   // }, [lastIP]);

   useEffect(() => {
      axios.get(baseURL)
         .then(res => {
            const dt = String(res.data).split('');
            console.log('dt: ', dt);
            setPins(dt);
         });
   }, [baseURL]);

   return (
      <div className='my-combo-class'>

         <Button type={pins[1] === "0" ? "error" : ""} callback={() => togleLamba("1")} >
            Levo
         </Button>

         <Button type={pins[0] === "0" ? "error" : ""} callback={() => togleLamba("0")} >
            Centar
         </Button>

         <Button type={pins[2] === "0" ? "error" : ""} callback={() => togleLamba("2")} >
            Desno
         </Button>

         <br />

         <Button type={pins[3] === "0" ? "error" : ""} callback={() => togleLamba("3")} >
            Biro
         </Button>

         <br />

         <Button type="info" callback={() => osvez()} >
            Ozone
         </Button>

         <Button type="error" callback={() => togleAlert()}>
            Alert
         </Button>

         <ObjectView
            data={lastIP}
            options={options}
            tyles={styles}
            palette={palette}
         />
         <ObjectView data={pins} />
         <h4>{baseURL} </h4>

         <Alert
            visible={showAlert}
            title="Alert Title"
            mainText="This is the main text of the alert."
            buttons={buttons}
         />
      </div>
   );
};

export default Lambi;
