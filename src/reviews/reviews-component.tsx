
// import { useState} from 'react'
import './css/reviews-component.css'
// import type { jsx } from 'react/jsx-runtime';
// import { CgRadioCheck } from 'react-icons/cg';
import { ReviewsSlider } from './ReviewsSlider';




export const ReviewsComponent = ({text='customer’s reviews' }:{text:string}) =>{
    
    const reviews = [
    { text: 'Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra.',
         author: 'David William - Feb 22, 2023' },
    { text: 'Amet non dolor pellentesque feugiat ac nec ac in. Dictumst turpis natoque eget suscipit arcu. Eu nunc quis consectetur iaculis sit et. Ipsum mattis eleifend arcu faucibus netus neque tellus amet. Accumsan enim cursus nulla tellus felis vitae.', 
        author: 'Emma Turner - Feb 22, 2023' },
    { text: 'Adipiscing dictum adipiscing arcu venenatis dolor adipiscing. Iaculis mauris tellus morbi nisl suspendisse egestas augue at. In tortor tristique quisque faucibus dui.  Fusce lacus dignissim vel integer sagittis. Aliquam in cras eget et turpis. Auctor purus hendrerit sit.', 
        author: 'Rachel Bryan - Feb 22, 2023' },
    //   { text: 'Excelente servicio', author: 'David William' },
    // { text: 'Muy recomendado', author: 'Emma Turner' },
    // { text: 'Volvería a comprar', author: 'Rachel Bryan' },
    ]
    
    return(
        <div className='boxPrincipal'>
    <h1>{text}</h1>

<div className='scrollTo'>

            <ReviewsSlider reviews={reviews} />
</div>

        </div>

    )
};