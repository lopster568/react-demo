import { useEffect, useState } from "react";
import jsonplaceholderAPI from "../../api/placeholders";
import tmdbAPI from "../../api/tmdb";
import { postExample } from "../../api/httpbin";

const AxiosExample = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    jsonplaceholderAPI.get("/posts").then((response) => {
      setData(response.data);
    });

    tmdbAPI.get("/movie/popular").then((response) => {
      setData2(response.data);
    });

    postExample({ message: "Hello World" }).then((res) =>
      console.log(res.data.json)
    );
  }, []);

  return (
    <div>
      <h1>Axios Example</h1>
      <h2>Data</h2>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
      <div>
        {data2.results &&
          data2.results.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AxiosExample;
