"use client"
import * as React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import Button from '@/components/rpui/ButtonNeon';
import Alert from '@/components/rpui/Alert'

export default function Home() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [showAlert, setShowAlert] = React.useState(false);
  const [lastHush , setLastHush] = React.useState("null");

  const handleOK = () => {
      console.log('OK clicked');
      setShowAlert(false);
  }

  const getHush = () => {
    setLastHush( crypto.randomUUID() );
  }

  const copyHush = () => {
    copyToClipboard(lastHush);
    setShowAlert(true);
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

  return (
    <div>

        <label>Fake API Key</label>

        <pre>
          <code>{lastHush}</code>
          <br />
          <Button callback = {() => getHush()}>Generate Hush</Button>
          <Button callback = {() => copyHush()}>Copy to clipboard</Button>
        </pre>

        <Alert
            visible={showAlert}
            title="Hush Copied to clipboard"
            mainText={lastHush}
            buttons={buttons}
        />
    </div>
  )
}


