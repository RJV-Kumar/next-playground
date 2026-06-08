export default async function ReviewDetails({
    params
}: {
    params : Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    return (
        <div> 
            <h1> ReviewID: {reviewId}</h1>
            <h1>productId: {productId}</h1>
        </div>
    )
}