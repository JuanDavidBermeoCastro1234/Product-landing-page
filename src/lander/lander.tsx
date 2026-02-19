// import type { JSX } from "react";
import './css/lander.css'
import { LanderComponent } from "./lander-component";
import Foto1 from "/public/bombi.png";
import Foto2 from "/public/shop.png";
import Foto3 from "/public/x.png";



export const Lander = ()=>{

    return(
        <div className='container'>
            <div className='lander'>
            <h1>Why Is Lander ?</h1>
            <p>Lander is simply product landing page template for any products. If you are searching for <br /> product landing page to create sales, lander is perfect.</p>
            </div>

            <div className='components'>

            <LanderComponent 
            img={Foto1}
            h3="100% high quality product"
            p="We have option of pick up in store"
            />
            <LanderComponent 
            img={Foto2}
            h3="Free shipping charge"
            p="Inside City delivery within 5 days"
            />
            <LanderComponent 
            img={Foto3}
            h3="Money back guarantee"
            p="We will take return in some cases"
            />
            </div>
        </div>
    )

}