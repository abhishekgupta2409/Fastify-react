import Link from "next/link";

export default function Product() {
  return (
    <>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <h1>Product Page</h1>
      <div>
        <li>
          <Link href="/product/1">
            <a> Prod 1</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/product/2">
            <a> Prod 2</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/product/3">
            <a> Prod 3</a>
          </Link>
        </li>
      </div>
    </>
  );
}
