import React from 'react';
import PropTypes from 'prop-types'

function Food({ name, picture, rating }) {

  return (
    <div>
     <h2>I like {name} </h2>
     <h4>{rating}/5.0</h4>
     <img src={picture} alt={name} />
     </div>

  );
}

const foodILike = [
  {
    id: 1,
    name: 'mapatofu',
    image: 'https://insupark.cafe24.com/data/file/0104/thumb-990294958_AoYPEyZL_19300001193658130244849997484_600x430.jpg',
    rating : 5,
  },

  {
    id: 2,
    name: 'samgupsal',
    image: 'https://contents-cdn.viewus.co.kr/image/2024/03/CP-2023-0058/image-eff28000-066d-4d01-a38e-b82e3bb45304.jpeg',
    rating : 4.5,
  },


];



function App() {
  return (
  <div>
    
    {foodILike.map(dish => (
      <Food key={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />

    ))}
  </div>

  );
      
}

export default App;
