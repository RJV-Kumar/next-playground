/**
 * sample dynamic routes can be: http://localhost:3001/products/1
 * dynamic routes, after products whatever the value is, can be captured using params
**/
export default async function ProductDetails({ 
    params
}: {
    params: Promise<{ productId: string}>
}) {
    const productId = (await params).productId;
    return <h1> Product details Page {productId}</h1>
}