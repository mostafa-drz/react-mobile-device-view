import React, { useState, ChangeEvent } from "react";

interface Props {
  onSubmit: (src: string) => void;
}
const Form: React.FC<Props> = props => {
  const [input, setInput] = useState<string>("");
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onSubmit(input);
  };
  return (
    <form className="form">
      <div className="input">
        <input
          type="text"
          onChange={onInputChange}
          value={input}
          placeholder="https://www.example.com"
        />
        <button onClick={onSubmit} type="submit" className="btn">
          View
        </button>
      </div>
    </form>
  );
};
// "https://dist.us1.magnet.click/bp3gp1e5m96l0nvm8i40";
export default Form;
