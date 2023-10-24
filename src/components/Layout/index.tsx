import React from "react";
import { FooterSection } from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <FooterSection />
    </div>
  );
};

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
