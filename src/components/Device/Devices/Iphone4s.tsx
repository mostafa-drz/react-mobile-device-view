import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const Iphone4S: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <Screen src={src} title={title} />
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </>
  );
};

export default Iphone4S;
