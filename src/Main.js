import hero_image from "./images/hero_image.png"
import './Main.css';
import GreekSalad from "./images/GreekSalad.png"
import LemonDessert from "./images/LemonDessert.png"
import Bruchetta from "./images/Bruchetta.png"
import avatar1 from "./images/avatar1.png"
import avatar2 from "./images/avatar2.png"
import avatar3 from "./images/avatar3.png"
import aboutus1 from "./images/aboutus1.png"
import aboutus2 from "./images/aboutus2.png"


function Main(){

    const specials = [
        {
            dcard: "dcard1",
            dimage: GreekSalad,
            dname: "Greek Salad",
            ddescription:"A vibrant and refreshing Greek Salad is a medley of crisp cucumbers, juicy tomatoes, Kalamata olives, and crumbly feta cheese, all tossed in a zesty dressing of extra virgin olive oil, lemon juice, and aromatic oregano. This iconic Mediterranean dish bursts with flavors and textures, "
        },
        {
            dcard: "dcard2",
            dimage: LemonDessert,
            dname: "Lemon Dessert",
            ddescription:"A heavenly lemon dessert is a symphony of sweet and tangy notes that awaken the palate. Whether it's a lemon tart, cake, or pie, the luscious lemon flavor takes center stage, complemented by a buttery crust or a light sponge."
        },
        {
            dcard: "dcard3",
            dimage: Bruchetta,
            dname: "Bruchetta",
            ddescription:"ruschetta is an Italian classic that tantalizes the taste buds with its simplicity and bold flavors. Slices of crusty bread are toasted to perfection, then generously topped with a mixture of ripe tomatoes, garlic, fresh basil, and drizzled with balsamic glaze and olive oil."
        }


      ];

    const testimonials = [
        {
            tcard: "card1",
            image: avatar1,
            name: "John D.",
            stars:"⭐⭐⭐⭐⭐",
            review: "A culinary gem! The restaurant offers a perfect blend of ambiance and exquisite flavors. From the warm hospitality to the mouthwatering dishes, every aspect exceeded expectations. A must-visit for those seeking an unforgettable dining experience."
        },
        {
            tcard: "card2",
            image: avatar2,
            name: "Ron J.",
            stars:"⭐⭐⭐⭐⭐",
            review: "Charming ambiance paired with delectable cuisine! The menu boasts a variety of flavorful options, and each dish is a masterpiece. Attentive staff and a cozy atmosphere make this place stand out. Highly recommend for a delightful meal out."
        },
        {
            tcard: "card3",
            image: avatar3,
            name: "Malik S.",
            stars:"⭐⭐⭐⭐⭐",
            review: "“ A gastronomic delight! The chef's creativity shines through in every dish, making it a feast for the senses. Impeccable service and a thoughtfully curated menu ensure a memorable dining adventure. Can't wait to return for another culinary journey”"
        }

      ];

    return(
        <>
        <div className="hero">
            <div className="container">
                <div className="content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are family owned, <br/>
                        Mediterranean restaurant, <br/>
                        focused on traditional recipes served with a modern twist</p>
                    <button>Reserve a Table</button>
                </div>
                <div className="image">
                    <img src={hero_image}/>
                </div>
            </div>
        </div>

        <div className="highlights">
            <div className="title">
                <h1>This Weeks Specials</h1>
                <button>Order Online</button>
            </div>
            <div className="dcards">
                {specials.map((special) =>
            (
                <div className={special.dcard} id="dcardid">
                   <img src={special.dimage} id="dimageid"/>
                   <h3>{special.dname}</h3>
                   <p>{special.ddescription}</p>
                   <h4><a href="Home.js">Order a Delivery</a></h4>
               </div>
            ))}

        </div>
        </div>

        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="tcards">
            {testimonials.map((testimonial) =>
            (
                <div className={testimonial.tcard} id="tcardid">
                <div className="avatarnamecontainer">
                    <div className="avatarbox">
                        <img src={testimonial.image} id="timageid"/>
                    </div>
                    <div className="namebox">
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.stars}</h4>
                    </div>
                </div>
                   <p>{testimonial.review}</p>
               </div>
            ))}

            </div>
        </div>

        <div className="about-us">
            <div className="item description">
                <h1>Adrian & Mario</h1>
                <h4>Founders of the Taste!</h4>
                <p>Meet Adrian and Mario, the dynamic duo behind our family-owned Mediterranean restaurant. Adrian, with his passion for culinary artistry, brings a wealth of experience in crafting traditional recipes. His keen eye for detail ensures each dish is a culinary masterpiece. Mario, the heart and soul of our establishment, infuses a modern twist into our offerings, creating a dining experience that seamlessly blends heritage with innovation.</p>
            </div>
            <div className="item images">
                <img src={aboutus2} className="item images img1"/>
                <img src={aboutus1} className="item images img2"/>
            </div>
        </div>
        </>
    )
}

export default Main;