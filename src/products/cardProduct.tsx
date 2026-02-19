import { Rating } from "./rating"
import './css/cardProduct.css'



type CardProductProps = {
  data: {
    image: string
    title: string
    price: number
  }
}

export const CardProduct = ({ data }: CardProductProps) => {
  const { image, title, price } = data

  return (
    <div className='card '>
      <div className='IMG'>
        <img src={image} alt={title} />
      </div>

      <Rating />

      <div>
        <h2>{title}</h2>
      </div>

      <div>
        <p>${price}</p>
      </div>
      
      <button>Order now</button>
    </div>
  )
}
