import Link from "next/link";

export default function NewsDetail({ news }) {
  return (
    <>
      <h1>NewsDetail</h1>
      <div>
        {news.id} - {news.title}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.id}`
  );
  const data = await result.json();

  return {
    props: { news: data },
  };
}
