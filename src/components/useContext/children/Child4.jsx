import { useContext } from "react";
import { SecretContext } from "../contextExample1";

const Child4 = () => {
  const secret = useContext(SecretContext);
  return (
    <>
      <p>Child 4</p>
      {secret}
    </>
  );
};

export default Child4;
