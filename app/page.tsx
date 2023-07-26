"use client"
import * as React from "react";

import Button from '@/components/rpui/ButtonNeon';
import Alert from '@/components/rpui/Alert'
import ButtonLessonit from "@/components/rpui/ButtonLessonit";
import ButtonSuperGlow from "@/components/rpui/ButtonSuperGlow";

import { useCopyToClipboard } from '../hooks/useCopyToClipBoard'
import Card from "@/components/rpui/Card";

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

        <div className="p-8">
          <label>Fake API Key</label>
          <pre>
            <code>{lastHush}</code>
            <br />
            <Button callback = {() => getHush()}>Generate Hush</Button>
            <Button callback = {() => copyHush()}>Copy to clipboard</Button>
          </pre>

          <br/>
          <ButtonLessonit callback={() => copyHush()}>Lessonit Button</ButtonLessonit> 
          <ButtonLessonit className="alt" callback={() => copyHush()}>Lessonit Button</ButtonLessonit> 

          <br/>
          <ButtonSuperGlow callback={() => copyHush()}>Lessonit Button</ButtonSuperGlow> 
          <ButtonSuperGlow className="alt" callback={() => copyHush()}>Lessonit Button</ButtonSuperGlow>  

        </div>

        <div className="grid grid-cols-4 gap-2">

        <div className="p-4">
        <Card
            image="Illy.jpg"
            title="Can coffee make you a better developer?"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            subtext="Jonathan Reinink Aug 18"
            subtitle="Lorem"
        />
        </div>

        <div className="p-4">
          <Card
              image="turkish-cofee.webp"
              title="Can coffee make you a better developer?"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              subtext="Jonathan Reinink Aug 18"
              subtitle="Ipsum"
              />
        </div>

        <div className="p-4">
          <Card 
              image="ring.png"
              title="Can coffee make you a better developer?"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              subtext="Jonathan Reinink Aug 18"
              subtitle="Delorem LXris"
              />
        </div>
      b</div>

        <Alert
            visible={showAlert}
            title="Hush Copied to clipboard"
            mainText={lastHush}
            buttons={buttons}
        />
    </div>
  )
}


