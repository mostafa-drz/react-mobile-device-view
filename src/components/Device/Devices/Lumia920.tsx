import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const Lumia920: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="top-bar"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="speaker"></div>
      <Screen src={src} title={title} />
    </>
  );
};

export default Lumia920;
