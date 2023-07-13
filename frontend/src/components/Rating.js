import React from 'react';

function Rating(props) {
  const { rating, numReviews } = props;

  var content = [];

  for (let i = 1; i <= 5; i++) {
    content.push(
      <i
        className={
          rating >= i
            ? 'fas fa-star'
            : rating >= i / 2
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    );
  }

  return (
    <div className="rating">
      <span>{content}</span>
      <span> {numReviews} reviews</span>
    </div>
  );
}

export default Rating;
