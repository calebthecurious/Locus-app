import React from 'react';
import { Review } from "@prisma/client";
import ReviewCard from './ReviewCard';

type ReviewsProps = {
  reviews: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What {reviews.length} {reviews.length === 1 ? "person" : "people"} are saying
      </h1>
      <div className="">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;