import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      <div>
        {posts?.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/posts/${item.id}`} passHref>
                <h2>
                  {item.id} - {item.title}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data },
    revalidate: 10,
  };
}
