import { useEffect, useState } from 'react'
import { CardProduct } from './cardProduct'
import './css/product.css'


type ProductAPI = {
  id: number
  title: string
  price: number
  images: string[]
}

export const Products = () => {
  const [products, setProducts] = useState<ProductAPI[]>([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then((data: ProductAPI[]) => setProducts(data))
  }, [])

  return (
    <div className='contain'>
        
        <div className='text'>

        <h1>Our Products</h1>
        <p>List your other great products here.</p>
        </div>
    <div className="products-grid">
      {products.slice(0,3).map(product => (
          <CardProduct
          key={product.id}
          data={{
              image: product.images[0],
              title: product.title,
              price: product.price
            }}
            />
        ))}
    </div>
    </div>
  )
}
