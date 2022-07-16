import React from "react";

export default function Comments() {
  const [comments, setComments] = React.useState([]);
  const [commInp, setCommInp] = React.useState("");
  const handleClick = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const handleChange = (e) => {
    setCommInp(e.target.value);
  };

  const handleSubmit = async () => {};

  return (
    <>
      <h1>Comments</h1>
      <input value={commInp} onChange={handleChange} />
      <button onClick={handleClick}>Fetch Comments</button>
      <button onClick={handleSubmit}>Submit Comments</button>

      <div>
        {comments.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
}
