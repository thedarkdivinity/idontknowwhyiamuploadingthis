import React, { useState } from "react";
const Todoform = props => {
  const [value, setvalue] = useState("");
  const handlesubmit = () => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setvalue(e.target.value)}
        />
      </form>
    </>
  );
};
export default Todoform;
