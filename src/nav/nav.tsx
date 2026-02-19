import type { JSX } from "react";
import './css/home.css'


export const Nav = (): JSX.Element=>{
    
    return(
        <div className="principal">
        <div className="nav">

            <h2 className="lander">Lander</h2>
        <div className="footer">
            <p className="home">Home</p>
            <p>About</p>
            <p>Reviews</p>
            <p>video</p>
            <p>Features</p>
            <p>Products</p>
            <p>Faqs</p>
            <p>Contact</p>
        </div>
            </div>

        <div className="car">
            <section className="landingP">
                <h1>Your Product <br /> Landing page</h1>
                <p>Write here about your product short description.</p>
                <button onClick={()=> {console.log('falta el orden now')}}>Order now</button>
            </section>
            <section className="content-img">
            <img className ='img'src="/public/carshop.png" alt="" />
            </section>
        </div>
        
    

        </div>
    )
};