import { useRouter } from "next/router";

export default function ReviewDetail() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h1>
        Review {reviewId} about product {productId}
      </h1>
    </>
  );
}
