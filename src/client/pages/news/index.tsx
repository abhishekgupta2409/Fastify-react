import Link from "next/link";

export default function News({ news }) {
  console.log(news)
  return (
    <>
      <h1>List of news articles</h1>
      <div>
        {news?.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return {
    props: { news: data },
  };
}
