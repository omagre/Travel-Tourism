import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import ServiceImg from "../assets/c.jpg"
import Review from "../components/Review";
//import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Service(){
    return(
        <>
       <Navbar/>
          <Hero
            cName="hero-mid"
            heroImg={ServiceImg}
            //title="Service"
            
            btnClass="hide"
          />
          {/*<Trip/>*/}
          <Review/>
          <Footer/>
        </>
    );

}
export default Service;