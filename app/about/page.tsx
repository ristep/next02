"use client"

import CardVertical from "@/components/rpui/CardVertical";
import CardHorizontal from "@/components/rpui/CardHorizontal";
import Button from "@/components/rpui/ButtonTW/Button";

const About = () => {

   const handleButtonClick = () => {
      console.log("Button clicked");
   };

   return (
      <div>
         <div className="my-combo-class">
            <h1>About</h1>
         </div>
         <p>This is the about page for my website.</p>
         <p>Im a software engineer who loves to build things.</p>
         <p>Im passionate about creating user-friendly and accessible products.</p>
         <button>Obicno</button>
         <Button color="blue"   label='Test Button' callback={handleButtonClick} />
         <Button color="red"    label='Button' callback={handleButtonClick} />
         <Button color="yellow" label='Submit' callback={handleButtonClick} type='submit'/>
         <Button color="green"  label='Reset'  callback={handleButtonClick} type='reset' />
         <Button color="slate"  label='Reset'  callback={handleButtonClick} type='reset' />
         <Button color="sky"    label='Reset'  callback={handleButtonClick} type='reset' />
         <Button color="orange" label='Reset'  callback={handleButtonClick} type='reset' />

         <p>Disabled</p>

         <Button color="blue"   label='Test Button' callback={handleButtonClick} active={false}/>
         <Button color="red"    label='Test Button' callback={handleButtonClick} active={false}/>
         <Button color="yellow" label='Submit' callback={handleButtonClick} type='submit'active={false} />
         <Button color="green"  label='Reset'  callback={handleButtonClick} type='reset' active={false}/>
         <Button color="slate"  label='Reset'  callback={handleButtonClick} type='reset' active={false}/>
         <Button color="sky"    label='Reset'  callback={handleButtonClick} type='reset' active={false}/>
         <Button color="orange" label='Reset'  callback={handleButtonClick} type='reset' active={false}/>

         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">

            <div className="p-2">
               <CardVertical
                  image="orange-pi.png"
                  title="Can coffee make you a better developer?"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                  subtext="Jonathan Reinink Aug 18"
               />
            </div>

            <div className="p-2">
               <CardVertical
                  image="cofi.jpg"
                  title="Can coffee make you a better developer?"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                  subtext="Jonathan Reinink Aug 18"
               />

            </div>
            <div className="p-2">
               <CardVertical
                  image="esspreo.jpg"
                  title="Can coffee make you a better developer?"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                  subtext="Jonathan Reinink Aug 18"
               />
            </div>

            <div className="p-2">
               <CardVertical
                  image="turkish-cofee.webp"
                  title="Can coffee make you a better developer?"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                  subtext="Jonathan Reinink Aug 18"
               />
            </div>

         </div>
      </div>
   )
}

export default About;
