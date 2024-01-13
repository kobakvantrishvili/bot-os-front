import { ReactNode } from "react";

export enum SelectedPage {
  About = "about",
  Features = "features",
  Pricing = "pricing",
}

export interface FeatureType {
  isLeftToRight: boolean;
  image: string;
  title: ReactNode;
  description: string;
  listItems: Array<string>;
}
