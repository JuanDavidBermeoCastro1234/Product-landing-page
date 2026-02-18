import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Nav } from './nav/nav'
// import { LanderComponent } from './lander/lander-component'
// import { Lander } from './lander/lander'
import { ReviewsComponent } from './reviews/reviews-component'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReviewsComponent text='customer’s reviews' />
  </StrictMode>,
)
