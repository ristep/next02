"use client"
import Button from "../../components/Button"

const About = () => {

   const handleButtonClick = () => {
      console.log("Button clicked");
   };

   return (
      <>
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

      </>
   )
}

export default About;
