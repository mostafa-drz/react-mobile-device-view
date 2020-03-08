import React from "react";
import Screen from "../Screen";
import { Props } from "./index";

const IphoneX: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <>
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <Screen src={src} title={title} />
    </>
  );
};

export default IphoneX;
