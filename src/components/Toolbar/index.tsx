import React from "react";
import {
  StayCurrentLandscape,
  StayCurrentPortrait,
  ZoomIn,
  ZoomOut
} from "@styled-icons/material";

interface Props {
  onZoomIn: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onZoomOut: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  showLandScape: boolean;
  isLandScape: boolean;
  onLandScapeToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  zoom: number;
}
const Toolbar: React.FC<Props> = props => {
  const {
    onZoomIn,
    onZoomOut,
    showLandScape,
    isLandScape,
    onLandScapeToggle,
    zoom
  } = props;
  return (
    <div className="toolbar">
      <div className="zoom">
        <ZoomIn
          onClick={onZoomIn}
          className="toolbar-item btn"
          size={30}
          fontSize="30px"
        />
        <span className="current-zoom">{zoom}%</span>
        <ZoomOut onClick={onZoomOut} className="toolbar-item btn" size={30} />
      </div>

      {showLandScape &&
        (isLandScape ? (
          <StayCurrentPortrait
            onClick={onLandScapeToggle}
            className="toolbar-item btn"
            size={30}
          />
        ) : (
          <StayCurrentLandscape
            onClick={onLandScapeToggle}
            className="toolbar-item btn"
            size={30}
          />
        ))}
    </div>
  );
};

export default Toolbar;
