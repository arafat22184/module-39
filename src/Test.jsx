export default function Test() {
  const test = 25;
  let content;
  if (test > 10) {
    content = <p>{test}</p>;
  }

  return (
    <>
      <h1>hello</h1>
      {content}
    </>
  );
}
