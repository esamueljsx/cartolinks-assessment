import { StaticImageData } from "next/image";
import { JSX } from "react";

export type Tools = {
  icon?: JSX.Element;
  title: string;
  description: string;
  action: string;
  bg: string;
  isNew?: boolean;
};

export type Slider = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
  badge: string;
};
