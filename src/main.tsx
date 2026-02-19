import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CardProduct } from './products/cardProduct'
import { Products } from './products/product'
// import { Nav } from './nav/nav'
// import { LanderComponent } from './lander/lander-component'
// import { Lander } from './lander/lander'
// import { Products } from './products/rating'
// import {Products}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Products />
 
  </StrictMode>,
)
