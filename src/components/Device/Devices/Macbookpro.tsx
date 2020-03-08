import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const Macbookpro: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="top-bar"></div>
      <div className="camera"></div>
      <Screen src={src} title={title} />
      <div className="bottom-bar"></div>
    </>
  );
};

export default Macbookpro;
