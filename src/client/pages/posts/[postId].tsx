import { useRouter } from "next/router";
export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
}
