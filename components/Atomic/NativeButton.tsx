'use client';

import React, { CSSProperties } from 'react';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

function NativeButton({ children, style }: IProps) {
  return (
    <span className="native-button">
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div className="" style={style}>
        {children}
      </div>
    </span>
  );
}

export default NativeButton;
