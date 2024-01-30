import Child2 from "./Child2";

const Child1 = ({ secret }) => {
    return (
      <>
        <p>Child 1</p>
        {secret}
        <Child2 />
      </>
    );
  };
  
  export default Child1;
  