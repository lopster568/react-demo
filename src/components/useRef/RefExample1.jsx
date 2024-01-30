import { useRef, useState } from "react";
import ocean from "../../assets/ocean.mp4";

const RefExample1 = () => {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const imgRef = useRef(null);

  const showValue = () => {
    console.log(inputRef.current)
    alert(inputRef.current.value);
  };

  const toggleControls = () => {
    if (videoRef.current.controls) {
      videoRef.current.controls = false;
    } else {
      videoRef.current.controls = true;
    }
  };

  const decreaseSize = () => {
    imgRef.current.style.width = "100px";
  };

  const increaseSize = () => {
    imgRef.current.style.width = "300px";
  };

  return (
    <div>
      <h1>useRef Hook</h1>
      <p>Example 1: Referencing and Manipulating DOM elements</p>
      <div>
        <label>Input</label>
        <input ref={inputRef} type="text" />
        <button onClick={showValue}>Show Value</button>
      </div>
      <div>
        <h3>Video</h3>
        <video ref={videoRef} style={{ width: 600 }} src={ocean}></video>
        <div>
          <button onClick={toggleControls}>Toggle Controls</button>
        </div>
      </div>
      <div>
        <h3>Image</h3>
        <img
          ref={imgRef}
          style={{ width: 200 }}
          src="https://react.dev/images/docs/illustrations/i_ref.png"
          alt=""
        />
        <div>
          <button onClick={decreaseSize}>Decrease Size</button>
          <button onClick={increaseSize}>Increase Size</button>
        </div>
      </div>
    </div>
  );
};

export default RefExample1;
