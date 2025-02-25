// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: OhrrNVjcp5CM
import * as React from "react";
import {
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button2 from "../../Button2"; // plasmic-import: JzEs4dPI9Ib6/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./Plasmic_12345.module.css"; // plasmic-import: OhrrNVjcp5CM/css

createPlasmicElementProxy;

export const Plasmic_12345__VariantProps = new Array();

export const Plasmic_12345__ArgProps = new Array();

const $$ = {};

function Plasmic_12345__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <Button2
        data-plasmic-name={"button2"}
        data-plasmic-override={overrides.button2}
        className={classNames("__wab_instance", sty.button2)}
      >
        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          href={"/"}
          platform={"react"}
        >
          {"\u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627"}
        </PlasmicLink__>
      </Button2>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button2", "link"],
  button2: ["button2", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: Plasmic_12345__ArgProps,
          internalVariantPropNames: Plasmic_12345__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_12345__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_12345";
  } else {
    func.displayName = `Plasmic_12345.${nodeName}`;
  }
  return func;
}

export const Plasmic_12345 = Object.assign(
  // Top-level Plasmic_12345 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button2: makeNodeComponent("button2"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for Plasmic_12345
    internalVariantProps: Plasmic_12345__VariantProps,
    internalArgProps: Plasmic_12345__ArgProps
  }
);

export default Plasmic_12345;
/* prettier-ignore-end */
