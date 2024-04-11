import mountain1 from "../assets/Goa1.jpg"
import mountain2 from "../assets/Goa2.jpg"
import mountain3 from "../assets/Manali1.jpg"
import mountain4 from "../assets/Manali2.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Top Destinations</h1>
            <p>Traveling opens the door to creating memories</p>
            
            <DestinationData
            className="first-des"
                heading="Goa"
                text="The magical land of Goa is a land of celebrations and festivities.
                 Snuggled in the Konkan Coast Belt, It has a long coastline
                 of approx 100 kilometers. Goa is primarily known for its
                 beautiful beaches which are engrossed with oscillating
                 palm trees and an astonishing nightlife Goa is a perfect 
                 infusion of varieties, and it quite literally has something 
                 for everyone to do at night. So, be it crazy partying with 
                 people from different continents, playing your luck at the 
                 casinos or having a beach-side bonfire-barbeque night!"
                img1={mountain1}
                img2={mountain2}
            />

            <DestinationData
            className="first-des-reverse"
                heading="Manali, Himachal Pradesh"
                text="A gift of the Himalayas to the world, Manali
                 is a beautiful township nestled in the picturesque
                 Beas River valley. It is a rustic enclave known for
                 its cool climate and snow-capped mountains, offering 
                 respite to tourists escaping scorching heat of the plains.
                 Manali attracts adventure travellers, with heli-skiing, hiking,
                 mountaineering and river rafting the favored active pursuits. 
                 Come down from your endorphin high by breathing deeply at the 
                 four-story, wooden Hidimba Devi Temple."
                img1={mountain3}
                img2={mountain4}
            />

        </div>
        
        
    );
};

export default Destination;