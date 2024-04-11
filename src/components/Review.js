import "./ReviewStyles.css"
import ReviewData from "./ReviewData"
import Review1 from "../assets/review1.jpg"
import Review2 from "../assets/review2.jpg"
import Review3 from "../assets/review3.jpg"
function Review(){
    return(
        <div className="review">
            <h1>Testimonials</h1>
            <p>See what people are saying about TravelHub</p>

        <div className="reviewcard">
            <ReviewData
                image={Review1}
                heading="Bharat Tarr"
                text="I recently booked a trip with TravelHub 
                    and I couldn't be more pleased with the experience. 
                    From start to finish, everything was handled with 
                    professionalism and efficiency. During my travels, 
                    everything went smoothly thanks to the careful 
                    planning and coordination by TravelHub. 
                    From transportation to accommodations, every aspect 
                    of my trip was well-organized and hassle-free."
            />

            <ReviewData
                image={Review2}
                heading="Yammi Hades"
                text="After months of endless scrolling and daydreaming 
                about my perfect getaway, I finally decided to book my 
                trip through TravelHub. Honestly, it was the best 
                decision I made! As someone who tends to get overwhelmed 
                by planning, the thought of having experts handle the 
                nitty-gritty details was incredibly appealing. Upon 
                arrival at my destination, everything was as planned."
            />

            <ReviewData
                image={Review3}
                heading="Prabhakar"
                text="Once my trip was booked, the communication from 
                TravelHub was excellent. I received timely updates 
                regarding my booking, including reminders for important 
                dates and details about my itinerary. The accommodations 
                were safe, clean, and well-located. I was particularly 
                impressed with the guided tours arranged for me. For 
                anyone hesitant about using a travel agency, 
                I say go for it, and I highly recommend TravelHub."
            />
        </div>
    </div>

    );
}

export default Review;