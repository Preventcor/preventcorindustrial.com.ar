import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container(props: IProps) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
