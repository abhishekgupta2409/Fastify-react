import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/product');
  };

  return (
    <ul>
      <h1>Home Page</h1>
      <div style={{ display: 'grid' }}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/events">
          <a>Events</a>
        </Link>
        <Link href="/comments">
          <a>Comments</a>
        </Link>
      </div>

      <button onClick={handleClick}>Place Order</button>
    </ul>
  );
}
