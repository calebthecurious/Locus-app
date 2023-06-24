import React from 'react'
import Image from 'next/image';
import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../utils/calculateReviewRatingAverage';

import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";

export default function Stars({reviews}: {reviews: Review[]}) {
    const rating = calculateReviewRatingAverage(reviews);

    const renderStars = () => {
        const stars = [];
    }

    for(let i = 0; i < 5; i++){
        const difference = parseFloat((rating - i).toFixed(1))
        if(difference >= 1) stars.push(fullStar)
        else if(difference < 1  && difference > 0) {
            if(difference<= 0.2) stars.push(emptyStar)
            else if(difference > 0.2 && difference <= 0.6) stars.push(halfStar)
            else stars.push(fullStar)
        }
        else stars.push(e)
    }

    return (
        <div>
            <Image src={fullStar} alt="" />
        </div>
    )
} 
