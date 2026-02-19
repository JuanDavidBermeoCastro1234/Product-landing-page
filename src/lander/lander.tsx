// import type { JSX } from "react";
import './css/lander.css'
import { LanderComponent } from "./lander-component";


export const Lander = ()=>{

    return(
        <div className='container'>
            <div className='lander'>
            <h1>Why Is Lander ?</h1>
            <p>Lander is simply product landing page template for any products. If you are searching for <br /> product landing page to create sales, lander is perfect.</p>
            </div>

            <div className='components'>
            <LanderComponent 
            img="/public/bombi.png"
            h3="100% high quality product"
            p="We have option of pick up in store"
            />
            <LanderComponent 
            img="/public/shop.png"
            h3="Free shipping charge"
            p="Inside City delivery within 5 days"
            />
            <LanderComponent 
            img="/public/x.png"
            h3="Money back guarantee"
            p="We will take return in some cases"
            />
            </div>
        </div>
    )

}