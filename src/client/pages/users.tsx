
export default function Users({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        );
      })}
    </>
  );
}
// https://www.youtube.com/watch?v=yoEHWwEVvzY&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=19&ab_channel=Codevolution
// runs only on server side/ build time
// if we console here, it will show in server side
// code wont be sent to JS bundle on client
// only for pre rendering not for client side rendering
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data },
  };
}
