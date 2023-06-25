import { Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]): number => {
    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
        return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    return averageRating;
}