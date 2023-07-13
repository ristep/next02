"use client"
import Button from "@/components/Button"

const About = () => {

   const handleButtonClick = () => {
      console.log("Button clicked");
   };

   return (
      <>
         <h1>About</h1>
         <p>This is the about page for my website.</p>
         <p>I'm a software engineer who loves to build things.</p>
         <p>I'm passionate about creating user-friendly and accessible products.</p>
         <Button color='blue' label='Test Button' callback={handleButtonClick} isButtonActive={true}/>
         <Button color='blue' label='Test Button' callback={handleButtonClick} isButtonActive={false}/>

         <Button  label='Submit' callback={handleButtonClick} type='submit' />
         <Button color='red' label='Reset' callback={handleButtonClick} type='reset' />

      </>
   )
}

export default About
