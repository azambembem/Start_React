import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <input onChange={onReset} value={text} />
      <div>
        <b>값: {text} </b>
      </div>
    </div>
  );
}

export default InputSample;
