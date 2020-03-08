import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const Nexus5: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <Screen src={src} title={title} />
    </>
  );
};

export default Nexus5;
