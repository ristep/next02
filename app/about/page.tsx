"use client"
import Button from "@/components/Button"
import CardVertical from "@/components/CardVertical";
import CardHorizontal from "@/components/CardHorizontal";

const About = () => {

   const handleButtonClick = () => {
      console.log("Button clicked");
   };

   return (
      <div>
         <h1>About</h1>
         <p>This is the about page for my website.</p>
         <p>Im a software engineer who loves to build things.</p>
         <p>Im passionate about creating user-friendly and accessible products.</p>

         <Button color="blue" label='Test Button' callback={handleButtonClick} />
         <Button color="red" label='Test Button' callback={handleButtonClick} />

         <Button color="yellow" label='Submit' callback={handleButtonClick} type='submit' />
         <Button color="green" label='Reset' callback={handleButtonClick} type='reset' />
         <Button color="slate" label='Reset' callback={handleButtonClick} type='reset' />
         <Button color="sky" label='Reset' callback={handleButtonClick} type='reset' />
         <Button color="orange" label='Reset' callback={handleButtonClick} type='reset' />

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
                  image="Illy.jpg"
                  title="Can coffee make you a better developer?"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                  subtext="Jonathan Reinink Aug 18"
               />
            </div>

         </div>

         <CardHorizontal
            image="ring.png"
            title="Can coffee make you a better developer?"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            subtext="Jonathan Reinink Aug 18"
         />

         <CardHorizontal
            image="TapaDoTapa.jpeg"
            title="Can coffee make you a better developer?"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            subtext="Jonathan Reinink Aug 18"
         />

      </div>
   )
}

export default About;
