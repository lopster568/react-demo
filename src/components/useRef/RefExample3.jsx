import { useRef, useState } from "react";

const RefExample3 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmitState = () => {
    alert(`Email: ${email} Password: ${password}`);
  };

  const handleSubmitRef = () => {
    alert(
      `Email: ${emailRef.current.value} Password: ${passwordRef.current.value}`
    );
  };

  return (
    <div>
      <h1>useRef Hook</h1>
      <p>Most common use case: Forms</p>
      <div>
        <div>
          <h2>Form with States</h2>
          <div>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>
          <button onClick={handleSubmitState} >Submit</button>
        </div>
        <div>
          <h2>Form with Ref</h2>
          <div>
            <label>Email</label>
            <input ref={emailRef} type="text" />
          </div>
          <div>
            <label>Password</label>
            <input ref={passwordRef} type="password" />
          </div>
          <button onClick={handleSubmitRef} >Submit</button>
        </div> 
      </div>
    </div>
  );
};

export default RefExample3;
