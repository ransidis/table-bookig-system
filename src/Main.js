import hero_image from "./images/hero_image.png"
import './Main.css';
import GreekSalad from "./images/GreekSalad.png"
import LemonDessert from "./images/LemonDessert.png"
import Bruchetta from "./images/Bruchetta.png"

function Main(){

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
            <div className="cards">
                <div className="card1">
                    <img src={GreekSalad}/>
                    <h2>Greek Salad</h2>
                    <p>A vibrant and refreshing Greek Salad is a medley of crisp cucumbers, juicy tomatoes, Kalamata olives, and crumbly feta cheese, all tossed in a zesty dressing of extra virgin olive oil, lemon juice, and aromatic oregano. This iconic Mediterranean dish bursts with flavors and textures, </p>
                    <h4><a href="Home.js">Order a Delivery</a></h4>
                </div>
                <div className="card2">
                    <img src={Bruchetta}/>
                    <h2>Bruschetta</h2>
                    <p>ruschetta is an Italian classic that tantalizes the taste buds with its simplicity and bold flavors. Slices of crusty bread are toasted to perfection, then generously topped with a mixture of ripe tomatoes, garlic, fresh basil, and drizzled with balsamic glaze and olive oil.</p>
                    <h4><a href="Home.js">Order a Delivery</a></h4>
                </div>
                <div className="card3">
                    <img src={LemonDessert}/>
                    <h2>Lemon Dessert</h2>
                    <p>A heavenly lemon dessert is a symphony of sweet and tangy notes that awaken the palate. Whether it's a lemon tart, cake, or pie, the luscious lemon flavor takes center stage, complemented by a buttery crust or a light sponge.</p>
                    <h4><a href="Home.js">Order a Delivery</a></h4>
                </div>
            </div>
        </div>


        </>
    )
}

export default Main;