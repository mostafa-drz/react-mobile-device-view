import React from "react";

interface Props {
  src: string;
  title: string;
}
const Screen: React.FC<Props> = props => {
  const { src, title } = props;
  return (
    <div className="screen">
      <iframe
        src={src}
        title={title}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default Screen;
