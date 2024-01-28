import React from "react";
import classes from "./styles.module.css";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.screenWrapper}>
      <Header />
      <div className={classes.screen}>{children}</div>
    </div>
  );
};

export default Layout;
