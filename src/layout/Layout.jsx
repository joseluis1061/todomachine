import React from "react";
import '../styles/Layout.css';
const Layout = ({children}) => {
  return (
    <div className="layout">
      <div className="layout_container">
      {children}
      </div>
    </div>
  );
};

export default Layout;
