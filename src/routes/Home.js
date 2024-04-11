import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import video from "../assets/mountains.mp4"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
          <Navbar/>
          <div cName="overlay"></div>
            <video src={video} muted autoPlay loop type="viedo/mp4"></video>
            <Hero

            //heroImg="https://images.unsplash.com/photo-1609202748711-feef2cdc7da3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Journey Tales: Unlock Your Dream With Us!"
            text="Life is short for a trip! Come discover the adventure here."
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    );

}

export default Home;