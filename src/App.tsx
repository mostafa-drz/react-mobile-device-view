import React, { useState } from "react";
import Device, { DEVICES, DeviceModels } from "./components/Device";
import "./App.css";
import Toolbar from "./components/Toolbar";
import PhonesList from "./components/PhonesList";
import Form from "./components/Form";

function App() {
  const [zoom, setZoom] = useState(0.7);
  const [selectedPhone, setSelectedPhone] = useState<DeviceModels>("IPHONE8");
  const [color, setColor] = useState<string | undefined>(undefined);
  const [landscape, setLandscape] = useState<boolean>(false);
  const [src, setSrc] = useState<string>("");

  const handleChangeDevice = (e: React.MouseEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    setSelectedPhone(element.name as DeviceModels);
  };
  const handleZoomIn = () => {
    if (zoom >= 1) return;
    setZoom(zoom => zoom + 0.1);
  };

  const handleZoomout = () => {
    if (zoom <= 0.3) return;
    setZoom(zoom => zoom - 0.1);
  };

  const handleLandScapeToggle = () => {
    setLandscape(landscape => !landscape);
  };

  const handleChangeColor = (e: React.MouseEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    setColor(element.name);
  };
  const handleSubmit = (src: string) => {
    setSrc(src);
  };
  return (
    <div className="container">
      <Toolbar
        onZoomOut={handleZoomout}
        onZoomIn={handleZoomIn}
        onLandScapeToggle={handleLandScapeToggle}
        showLandScape={DEVICES[selectedPhone]?.hasLandscape}
        isLandScape={landscape}
        zoom={Math.floor(zoom * 100)}
      />
      <Form onSubmit={handleSubmit} />
      <div className="main-container">
        <div className="phone-container">
          <Device
            type={selectedPhone}
            color={color}
            zoom={zoom}
            landscape={landscape}
            src={src}
            title="Activity"
          />
        </div>
        <PhonesList
          onChangeColor={handleChangeColor}
          devices={DEVICES}
          onDeviceChange={handleChangeDevice}
          selectedPhone={selectedPhone}
          selectedColor={color}
        />
      </div>
    </div>
  );
}

export default App;
