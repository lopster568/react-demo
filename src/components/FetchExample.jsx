import { useEffect } from "react";

const FetchExample = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json()) // parse response as JSON
      .then((data) => console.log(data)) // parses the data from the JSON
      .catch(err => console.log(err))
    }, []);

  return (
    <div>
      <h2>Fetch Example</h2>
    </div>
  );
};

export default FetchExample;
