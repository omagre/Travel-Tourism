import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import ContactImg from "../assets/12.jpg"
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
function Contact(){
    return(
        <>
       <Navbar/>
          <Hero
            cName="hero-mid"
            //heroImg={ContactImg}
            heroImg="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Contact"
            
            btnClass="hide"
          />
          <ContactForm/>
          <Footer/>
        </>
    );

}
export default Contact;