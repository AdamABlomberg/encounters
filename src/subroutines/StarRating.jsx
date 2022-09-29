
import React from 'react'
import { useState, useEffect } from 'react'
var rating;
const StarRating = ({setStateOfRating }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState();



  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => {
              console.log('onclick index = ', index)
              setRating(index);
              setStateOfRating(index)
            }
            }
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;