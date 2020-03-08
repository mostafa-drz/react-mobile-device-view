import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const IpadMini: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="camera"></div>
      <Screen src={src} title={title} />
      <div className="home"></div>
    </>
  );
};

export default IpadMini;
