import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const prodId = router.query.productId;
  return (
    <>
      <h1>Detail about product {prodId}</h1>
    </>
  );
}
