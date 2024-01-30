import Child3 from "./Child3";
const Child2 = ({ secret }) => {
  return (
    <>
      <p>Child 2</p>
      {secret}
      <Child3 />
    </>
  );
};

export default Child2;
