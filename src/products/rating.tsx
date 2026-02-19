import { useState } from 'react'
import './css/rating.css'

type StarRatingProps = {
  value?: number
  onChange?: (rating: number) => void
}

export const Rating = ({ value = 0, onChange }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(value)

  const handleClick = (star: number) => {
    setRating(star)
    onChange?.(star)
  }

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map(star => (
        <span
        key={star}
        className={star <= rating ? 'star filled' : 'star'}
        onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  )
}
