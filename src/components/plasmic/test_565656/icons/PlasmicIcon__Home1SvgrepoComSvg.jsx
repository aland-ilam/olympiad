// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Home1SvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 0L0 6v2h1v7h3v-5h3v5h8V8h1V6l-2-1.5V1h-3v1.25L8 0zm1 10h3v3H9v-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Home1SvgrepoComSvgIcon;
/* prettier-ignore-end */
