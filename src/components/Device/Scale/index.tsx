import React from "react";

interface Props {
  zoom: number;
}
const Scale: React.FC<Props> = props => {
  const { children, zoom } = props;
  return <div style={{ transform: `scale(${zoom})` }}>{children}</div>;
};

export default Scale;
