// import type { JSX} from "react";
import './css/lander-component.css'


interface Props {
    p:string;
    h3: string
    img:string
};

export const LanderComponent = ({p='hola',h3='Money back guarantee',img='/src/assets/x.png'}:Props)=>{
    return(
        <div className='lander-card'>
            <img className='img' src={img} alt="" />
            <h3 className='tittle'>{h3}</h3>
            <p className='lorem'>{p}</p>

        </div>
    )
}