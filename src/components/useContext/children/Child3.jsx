import Child4 from "./Child4";

const Child3 = ({ secret }) => {
    return (
      <>
        <p>Child 3</p>
        {secret}
        <Child4 />
      </>
    );
  };
  
  export default Child3;
  