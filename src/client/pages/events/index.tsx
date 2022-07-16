import React from "react";
import { useRouter } from "next/router";

export default function Profile({ eventList }) {
  const [events, setEvents] = React.useState(eventList);
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users?username=Bret"
    );
    const data = await res.json();
    setEvents(data);
    router.push("/events?username=Bret");
  };

  return (
    <>
      <h1>List of events </h1>
      <button onClick={handleClick}>Get Bret</button>
      {events?.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      eventList: data,
    },
  };
}
