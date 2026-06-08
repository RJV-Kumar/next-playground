/**
 * Custom Review Not found page
 * sample url to trigger this page: http://localhost:3001/products/1/reviews/1001
**/
"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4];
  return (
    <div> 
        <h2>Review {reviewId} not found for Product {productId} </h2>
    </div>
  );
}