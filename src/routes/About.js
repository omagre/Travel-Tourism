import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import AboutImg from "../assets/a.jpg"
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
function About(){
    return(
        <>
       <Navbar/>
          <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            //heroImg="https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="About"
            
            btnClass="hide"
          />
          <AboutUs/>
          <Footer/>
        </>
    );

}
export default About;