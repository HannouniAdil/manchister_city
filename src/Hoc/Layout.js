import React from 'react';
import Header from '../Component/Header_Footer/Header';

const Layout = (props) => {
  return (
    <div>
      <Header/ >
      {props.children}
    </div>
  );
};

export default Layout;