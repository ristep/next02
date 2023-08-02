"use client"
import React, { useState, useEffect } from 'react';
import { ObjectView } from 'react-object-view';
import Alert from '@/components/rpui/Alert';
import Button from '@/components/rpui/Button3D';
import axios from 'axios';

const getIpUrl = "https://sman.cloud/ip_log/get_last_ip.php";

const options = {
   hideDataTypes: false,
   hideObjectSize: false,
   hidePreviews: false
}
const palette = {
}
const styles = {
   fontSize: 14,
   lineHeight: 1.2,
   tabWidth: 2
}

const Lambi = () => {

   const [pins, setPins] = useState(["1", "1", "1", "1", "1", "1", "1", "1"]);
   const [showAlert, setShowAlert] = useState(false);
   const [lastIP, setLastIP] = useState({});
   const [urls, setUrls] = useState({
         mainUrl: "https://lapi-smanzy.bot.nu/lampiAPI.php",
         ipUrl: "",
         localUrl: "https://192.168.100.222/pins/lampiAPI.php",
         getIpUrl: getIpUrl,
   });

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
      // console.log('Clicked = ' + pin);
      // console.log(baseURL, { params: { pin: pin, val: light(+pin) ? 'off' : 'on' } });
      axios.get(urls.mainUrl, { params: { pin: pin, val: light(+pin) ? 'off' : 'on' } })
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
   }, []);

   useEffect(() => {
      setUrls( { ...urls, ipUrl: `https://${lastIP.ip}/pins/lampiAPI.php` });
   }, [lastIP]);

   useEffect(() => {
      axios.get(urls.mainUrl)
         .then(res => {
            const dt = String(res.data).split('');
            console.log('dt: ', dt);
            setPins(dt);
         });
   }, [urls.mainUrl]);

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
            styles={styles}
            palette={palette}
         />
         <ObjectView 
            data={pins} 
            options={options}
            styles={styles}
            palette={palette}
         />
         <ObjectView 
            data={urls} 
            options={options}
            styles={styles}
            palette={palette}
         />

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
