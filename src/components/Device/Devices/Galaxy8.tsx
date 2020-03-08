import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const Galaxy8: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="inner"></div>
      <div className="overflow">
        <div className="shadow"></div>
      </div>
      <div className="speaker"></div>
      <div className="sensors"></div>
      <div className="more-sensors"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <Screen src={src} title={title} />
    </>
  );
};

export default Galaxy8;
