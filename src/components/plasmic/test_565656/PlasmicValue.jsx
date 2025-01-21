// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: 16IIeWFEMbUD
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: 5wVC3rQb102V/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./PlasmicValue.module.css"; // plasmic-import: 16IIeWFEMbUD/css
import TakeOffIcon from "./icons/PlasmicIcon__TakeOff"; // plasmic-import: ARPZIeBvqPwU/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: J95z-KxkyUDA/icon

createPlasmicElementProxy;

export const PlasmicValue__VariantProps = new Array(
  "topBottom",
  "center",
  "withButton"
);

export const PlasmicValue__ArgProps = new Array(
  "children",
  "icon",
  "children2"
);

const $$ = {};

function PlasmicValue__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "topBottom",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.topBottom
      },
      {
        path: "center",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.center
      },
      {
        path: "withButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withButton
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcenter]: hasVariant($state, "center", "center"),
          [sty.roottopBottom]: hasVariant($state, "topBottom", "topBottom"),
          [sty.rootwithButton]: hasVariant($state, "withButton", "withButton")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__mKbTs, {
          [sty.freeBoxcenter__mKbTSkBuj8]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxtopBottom__mKbTs6YFFq]: hasVariant(
            $state,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__yslV)}>
          {renderPlasmicSlot({
            defaultContents: (
              <TakeOffIcon
                className={classNames(projectcss.all, sty.svg___3LhF)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fln9J, {
          [sty.freeBoxcenter__fln9JkBuj8]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxwithButton__fln9JPouUf]: hasVariant(
            $state,
            "withButton",
            "withButton"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dgnSj
                )}
              >
                {"Worldwide Shipping"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g3KEq
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencenter]: hasVariant(
              $state,
              "center",
              "center"
            )
          })
        })}
      </Stack__>
      {(hasVariant($state, "withButton", "withButton") ? true : false) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__of3Jz, {
            [sty.freeBoxcenter__of3JZkBuj8]: hasVariant(
              $state,
              "center",
              "center"
            ),
            [sty.freeBoxwithButton__of3JzPouUf]: hasVariant(
              $state,
              "withButton",
              "withButton"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button__pfZeH, {
                  [sty.buttonwithButton__pfZeHPouUf]: hasVariant(
                    $state,
                    "withButton",
                    "withButton"
                  )
                })}
                colors={"black"}
                endIcon={
                  <RightArrowIcon
                    className={classNames(projectcss.all, sty.svg___4VFqP)}
                    role={"img"}
                  />
                }
                rounded={true}
                size={"large"}
                submitsForm={true}
              >
                {"Read our letter"}
              </Button>
            ),

            value: args.children2,
            className: classNames(sty.slotTargetChildren2, {
              [sty.slotTargetChildren2center]: hasVariant(
                $state,
                "center",
                "center"
              ),
              [sty.slotTargetChildren2withButton]: hasVariant(
                $state,
                "withButton",
                "withButton"
              )
            })
          })}
        </Stack__>
      ) : null}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicValue__ArgProps,
          internalVariantPropNames: PlasmicValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */
