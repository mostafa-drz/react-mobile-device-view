import React from "react";
import {
  IpadMini,
  Iphone8Plus,
  IphoneS5,
  Galaxy8,
  IphoneX,
  Nexus5,
  SamsungS5,
  Iphone8,
  Iphone5C,
  Iphone4S,
  Lumia920,
  HTCOne,
  MacbookPro
} from "./Devices/index";
import Scale from "./Scale";

export const DEVICES: IDevices = {
  IPAD_MINI: {
    key: "ipad-mini",
    a11yTitle: "Ipad Mini",
    label: "Ipad Mini",
    hasLandscape: true,
    defaultColor: "silver",
    className: "ipad",
    colors: [
      { name: "Black", code: "rgba(0,0,0,0.7)", class: "black" },
      { name: "Silver", code: "#f0f0f0", class: "silver" }
    ],
    render: (props: Props) => <IpadMini {...props} />
  },
  IPHONE8_PLUS: {
    key: "iphone-8-plus",
    a11yTitle: "Iphone 8 Plus",
    label: "Iphone 8 Plus",
    hasLandscape: true,
    defaultColor: "silver",
    className: "iphone8plus",
    colors: [
      { name: "Black", code: "rgba(0,0,0,0.7)", class: "black" },
      { name: "Gold", code: "#f9e7d3", class: "gold" },
      { name: "Silver", code: "#f0f0f0", class: "silver" }
    ],
    render: (props: Props) => <Iphone8Plus {...props} />
  },
  IPHONE8: {
    key: "iphone8",
    a11yTitle: "Iphone 8",
    label: "Iphone 8",
    hasLandscape: true,
    className: "iphone8",
    defaultColor: "silver",
    colors: [
      { name: "Black", code: "rgba(0,0,0,0.7)", class: "black" },
      { name: "Gold", code: "#f9e7d3", class: "gold" },
      { name: "Silver", code: "#f0f0f0", class: "silver" }
    ],
    render: (props: Props) => <Iphone8 {...props} />
  },
  IPHONE_5S: {
    key: "iphone-5s",
    a11yTitle: "Iphone 5s",
    label: "Iphone 5s",
    hasLandscape: true,
    className: "iphone5s",
    defaultColor: "silver",
    colors: [
      { name: "Black", code: "rgba(0,0,0,0.7)", class: "black" },
      { name: "Gold", code: "#f9e7d3", class: "gold" },
      { name: "Silver", code: "#f0f0f0", class: "silver" }
    ],
    render: (props: Props) => <IphoneS5 {...props} />
  },
  GALAXY_note8: {
    key: "galaxy-note8",
    a11yTitle: "Galaxy Note 8",
    label: "Galaxy Note 8",
    className: "note8",
    hasLandscape: true,
    render: (props: Props) => <Galaxy8 {...props} />
  },
  IPHONE_X: {
    key: "iphone-x",
    a11yTitle: "Iphone X",
    label: "Iphone X",
    className: "iphone-x",
    hasLandscape: true,
    render: (props: Props) => <IphoneX {...props} />
  },
  NEXUS5: {
    key: "nexus5",
    a11yTitle: "Nexus 5",
    label: "Nexus 5",
    className: "nexus5",
    hasLandscape: true,
    render: (props: Props) => <Nexus5 {...props} />
  },
  SAMSUNG_S5: {
    key: "samsung-s5",
    a11yTitle: "Samsung s5",
    label: "Samsung S5",
    hasLandscape: true,
    className: "s5",
    defaultColor: "white",
    colors: [
      { name: "Black", code: "rgb(44, 43, 44)", class: "black" },
      { name: "white", code: "rgb(255, 255, 255)", class: "white" }
    ],
    render: (props: Props) => <SamsungS5 {...props} />
  },
  IPHONE_5C: {
    key: "iphone-5c",
    a11yTitle: "Iphone 5c",
    label: "Iphone 5c",
    hasLandscape: true,
    className: "iphone5c",
    defaultColor: "silver",
    colors: [
      { name: "White", code: "rgb(255,255,255)", class: "white" },
      { name: "Red", code: "rgb(249, 107, 108)", class: "red" },
      { name: "Yellow", code: "rgb(242, 220, 96)", class: "yellow" },
      { name: "Green", code: "rgb(151, 229, 99)", class: "green" },
      { name: "Blue", code: "rgb(51, 162, 219)", class: "blue" }
    ],
    render: (props: Props) => <Iphone5C {...props} />
  },
  IPHONE_4S: {
    key: "iphone-4s",
    a11yTitle: "Iphone 4s",
    label: "Iphone 4s",
    hasLandscape: true,
    className: "iphone4s",
    defaultColor: "silver",
    colors: [
      { name: "Black", code: "rgba(0,0,0,0.7)", class: "black" },
      { name: "Silver", code: "#f0f0f0", class: "silver" }
    ],
    render: (props: Props) => <Iphone4S {...props} />
  },
  LUMIA_920: {
    key: "lumia-920",
    a11yTitle: "Lumia 920",
    label: "Lumia 920",
    hasLandscape: true,
    className: "lumia920",
    defaultColor: "silver",
    colors: [
      { name: "White", code: "rgb(255,255,255)", class: "white" },
      { name: "Red", code: "rgb(249, 107, 108)", class: "red" },
      { name: "Yellow", code: "rgb(242, 220, 96)", class: "yellow" },
      { name: "Blue", code: "rgb(51, 162, 219)", class: "blue" },
      { name: "Black", code: "rgb(44, 43, 44)", class: "black" }
    ],
    render: (props: Props) => <Lumia920 {...props} />
  },
  HTCONE: {
    key: "htc-one",
    a11yTitle: "HTC One",
    label: "HTC One",
    className: "htc-one",
    hasLandscape: true,
    render: (props: Props) => <HTCOne {...props} />
  },
  MACBOOK_PRO: {
    key: "macbook-pro",
    a11yTitle: "Macbook Pro",
    label: "Macbook Pro",
    className: "macbook",
    hasLandscape: false,
    render: (props: Props) => <MacbookPro {...props} />
  }
};

const Device: React.FC<Props> = props => {
  const device = DEVICES[props.type];
  const { color, landscape, title, zoom } = props;
  if (device) {
    return (
      <Scale zoom={zoom}>
        <div
          className={`marvel-device ${device.className} ${color} ${landscape &&
            "landscape"}`}
        >
          {device.render({
            ...props,
            title: `${title} on ${device.a11yTitle}`
          })}
        </div>
      </Scale>
    );
  }
  return <p>Device not found! </p>;
};

export type DeviceModels =
  | "IPAD_MINI"
  | "IPHONE8_PLUS"
  | "IPHONE8"
  | "IPHONE_5S"
  | "GALAXY_note8"
  | "IPHONE_X"
  | "NEXUS5"
  | "SAMSUNG_S5"
  | "IPHONE_5C"
  | "IPHONE_4S"
  | "LUMIA_920"
  | "HTCONE"
  | "MACBOOK_PRO";

export interface IDevice {
  key: string;
  a11yTitle: string;
  label: string;
  className: string;
  hasLandscape: boolean;
  render: (props: Props) => React.ReactElement;
  defaultColor?: string;
  colors?: Array<{
    name: string;
    code: string;
    class: string;
  }>;
}

export type IDevices = {
  [modelKey in DeviceModels]: IDevice;
} & { [key: string]: IDevice | undefined };

interface Props {
  color: string | undefined;
  landscape: boolean;
  title: string;
  zoom: number;
  type: DeviceModels;
  src: string;
}

export default Device;
