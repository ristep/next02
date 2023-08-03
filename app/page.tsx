"use client"
import * as React from "react";

import Button from '@/components/rpui/ButtonNeon/Button';
import Alert from '@/components/rpui/Alert'
import ButtonLessonit from "@/components/rpui/ButtonLessonit/Button";
import ButtonSuperGlow from "@/components/rpui/ButtonSuperGlow/Button";
import ButtonEstast from "@/components/rpui/ButtonEstast/Button";
import Button3D from "@/components/rpui/Button3D/Button";

import { useCopyToClipboard } from '../hooks/useCopyToClipBoard'
import Card from "@/components/rpui/Card";

export default function Home() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [showAlert, setShowAlert] = React.useState(false);
  const [lastHush, setLastHush] = React.useState("null");

  const handleOK = () => {
    console.log('OK clicked');
    setShowAlert(false);
  }

  const getHush = () => {
    setLastHush(crypto.randomUUID());
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
        <code>{lastHush}</code>

        <br />
        <br />
        <h3>ButtonNeon</h3>
        <Button callback={() => getHush()}>Generate Hush</Button>
        <Button callback={() => copyHush()}>Copy to clipboard</Button>

        <br />
        <br />
        <h3>ButtonLessonit</h3>
        <ButtonLessonit callback={() => copyHush()}>Lessonit Button</ButtonLessonit>
        <ButtonLessonit className="alt" callback={() => copyHush()}>Lessonit Button</ButtonLessonit>

        <br />
        <br />
        <h3>ButtonSuperGlow</h3>
        <ButtonSuperGlow callback={() => copyHush()}>Lessonit Button</ButtonSuperGlow>
        <ButtonSuperGlow className="alt" callback={() => copyHush()}>Lessonit Button</ButtonSuperGlow>

        <br />
        <br />
        <h3>ButtonEstast</h3>
        <ButtonEstast callback={() => getHush()}>❤️ Hush Generate</ButtonEstast>
        <ButtonEstast className="alt" callback={() => copyHush()}>👍 Copy Hush</ButtonEstast>
        <ButtonEstast className="alt" callback={() => copyHush()}>⭐</ButtonEstast>

        <br />
        <br />
        <h3>Button3D</h3>
        <Button3D callback={() => getHush()} >❤️  Type none</Button3D>
        <Button3D type="info" callback={() => getHush()} >❤️  Info </Button3D>
        <Button3D type="success" callback={() => copyHush()}>👍  Success</Button3D>
        <Button3D type="warning" callback={() => copyHush()}>⭐  Warning</Button3D>
        <Button3D type="error" callback={() => copyHush()}>⭐  Error</Button3D>
        <Button3D type="dark" callback={() => copyHush()} disabled={false}>⭐  Dark </Button3D>

        <Button3D type="error" callback={() => copyHush()} disabled>⭐  Error</Button3D>
        <Button3D type="dark" disabled callback={() => copyHush()}>⭐  Dark </Button3D>
        <Button3D disabled={true} callback={() => getHush()} >❤️  Type none</Button3D>

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


