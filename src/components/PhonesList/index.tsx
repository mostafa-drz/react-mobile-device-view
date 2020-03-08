import React from "react";
import { IDevices, DeviceModels } from "../Device";

interface Props {
  devices: IDevices;
  onDeviceChange: (e: React.MouseEvent) => void;
  selectedPhone: DeviceModels;
  onChangeColor: (e: React.MouseEvent) => void;
  selectedColor: string | undefined;
}

const PhonesList: React.FC<Props> = props => {
  const {
    devices,
    onDeviceChange,
    selectedPhone,
    onChangeColor,
    selectedColor
  } = props;
  return (
    <div className="nav-phones">
      {Object.keys(devices).map(deviceKey => {
        return (
          <button
            onClick={onDeviceChange}
            name={deviceKey}
            className={`nav-phone-item ${selectedPhone === deviceKey &&
              "active"}`}
            key={devices[deviceKey]?.label}
          >
            {devices[deviceKey]?.label}
          </button>
        );
      })}
      <div className="nav-colors">
        {devices[selectedPhone]?.colors?.map(color => (
          <button
            name={color.class}
            style={{ backgroundColor: color.code }}
            className={`btn-color ${selectedColor === color.class &&
              "selected"}`}
            onClick={onChangeColor}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhonesList;
