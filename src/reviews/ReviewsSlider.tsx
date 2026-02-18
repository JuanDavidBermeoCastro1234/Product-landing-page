import { useState } from 'react'
import './css/ReviewsSlider.css'


// import { CgRadioCheck } from 'react-icons/cg'


type Review = {
  text: string
  author: string
  date?: string
  rating?: number
}

type ReviewsSliderProps = {
  reviews: Review[]
}

export function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const [ratings, setRatings] = useState<number[]>(
    () => reviews.map(() => 0)
  )

  const handleRating = (index: number, star: number) => {
    setRatings(prev =>
      prev.map((r, i) => (i === index ? star : r))
    )
  }

  return (
    <div className="reviews-wrapper">
      {reviews.map((review: Review, index: number) => (
        <div className="review" key={index}>
          <p>{review.text}</p>

          <div className="rating">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={star <= ratings[index] ? 'star filled' : 'star'}
                onClick={() => handleRating(index, star)}
              >
                ★
              </span>
            ))}
          </div>
            
          <strong>{review.author}</strong>
        </div>
      ))}
    </div>
  )
}
