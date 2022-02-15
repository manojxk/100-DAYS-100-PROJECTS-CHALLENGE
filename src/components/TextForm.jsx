import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    setText(text.toUpperCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
  };
  const TitleCase = () => {
    setText(
      text.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
    );
  };
  const InVeRsECaSe = () => {
    setText(
      text
        .split("")
        .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    );
  };

  return (
    <>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          placeholder="Type or paste your content here"
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>
        Clear
      </button>
      <button className="btn btn-primary mx-2" onClick={handleReverse}>
        Reverse
      </button>
      <button className="btn btn-primary mx-2" onClick={TitleCase}>
        Title Case
      </button>
      <button className="btn btn-primary mx-2" onClick={InVeRsECaSe}>
        InVeRsE CaSe
      </button>

      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        Text Copy to Clipboard
      </button>

      <div className="containers my-2">
        <h1>Your text summary</h1>
        <p>Words: {text.split(" ").length}</p>
        <p>Characters: {text.length}</p>
        <p>Read time {text.split(" ").length * 0.008}</p>
      </div>
    </>
  );
};

export default TextForm;
