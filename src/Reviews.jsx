import React from 'react';

const Reviews = () => {
  return (
    <div>
      <header>
        <h1>Reviews</h1>
      </header>
      <div className="review">
        <h3>John Smith</h3>
        <p>"This product is amazing! I've never been happier with a purchase."</p>
      </div>
      <div className="review">
        <h3>Jane Doe</h3>
        <p>"I was skeptical at first, but after trying this product, I'm a believer."</p>
      </div>
      <div className="review">
        <h3>Bob Johnson</h3>
        <p>"I've tried other products before, but this one is by far the best. Highly recommend."</p>
      </div>
    </div>
  );
}

export default Reviews;
