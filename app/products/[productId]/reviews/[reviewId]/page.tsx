/**
 * sample dynamic routes can be: http://localhost:3001/products/1/reviews/200
 * dynamic ReviewId page
**/
import { notFound } from "next/navigation";
export default async function ReviewDetails({
    params
}: {
    params : Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    //if wana call not found page if reviewId is more than 1000, assume we keep the max reviews upto 1000
    // or we can create a custom not-found page under reviews folder and render that here
    if(parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <div> 
            <h1> ReviewID: {reviewId}</h1>
            <h1>productId: {productId}</h1>
        </div>
    )
}