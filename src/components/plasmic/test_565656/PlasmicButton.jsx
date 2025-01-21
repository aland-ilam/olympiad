// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: 5wVC3rQb102V
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
import * as pp from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 5wVC3rQb102V/css
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: -4C1AwEJPzpp/icon

createPlasmicElementProxy;

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "iconOnly",
  "colors",
  "size",
  "rounded",
  "states",
  "isDisabled"
);

export const PlasmicButton__ArgProps = new Array(
  "link",
  "submitsForm",
  "target",
  "startIcon",
  "children",
  "endIcon"
);

const $$ = {};

function PlasmicButton__RenderFunc(props) {
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
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "colors",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.colors
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "rounded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rounded
      },
      {
        path: "states",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.states
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
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
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolors_black]: hasVariant($state, "colors", "black"),
          [sty.rootcolors_blue]: hasVariant($state, "colors", "blue"),
          [sty.rootcolors_gray]: hasVariant($state, "colors", "gray"),
          [sty.rootcolors_lightGrayOutline]: hasVariant(
            $state,
            "colors",
            "lightGrayOutline"
          ),
          [sty.rootcolors_lightGray]: hasVariant($state, "colors", "lightGray"),
          [sty.rootcolors_link]: hasVariant($state, "colors", "link"),
          [sty.rootcolors_white]: hasVariant($state, "colors", "white"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootrounded]: hasVariant($state, "rounded", "rounded"),
          [sty.rootrounded_size_large]:
            hasVariant($state, "rounded", "rounded") &&
            hasVariant($state, "size", "large"),
          [sty.rootrounded_size_large_showEndIcon_colors_black]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "colors", "black") &&
            hasVariant($state, "size", "large") &&
            hasVariant($state, "rounded", "rounded"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_colors_black]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "colors", "black"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.rootsize_large_showEndIcon_colors_black]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "colors", "black") &&
            hasVariant($state, "size", "large"),
          [sty.rootsize_narrow]: hasVariant($state, "size", "narrow"),
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.rootstates_active]: hasVariant($state, "states", "active")
        }
      )}
    >
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "showEndIcon", "showEndIcon")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__oIo4D, {
            [sty.freeBoxiconOnly__oIo4Daj98]: hasVariant(
              $state,
              "iconOnly",
              "iconOnly"
            ),
            [sty.freeBoxshowEndIcon__oIo4DRsdVe]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBoxshowStartIcon__oIo4DaJcE0]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.freeBoxsize_large__oIo4DMcOb]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.freeBoxsize_small__oIo4D7WhPx]: hasVariant(
              $state,
              "size",
              "small"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <MenuIcon
                className={classNames(projectcss.all, sty.svg___8FYaW)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolors_black]: hasVariant(
                $state,
                "colors",
                "black"
              ),
              [sty.slotTargetStartIconcolors_blue]: hasVariant(
                $state,
                "colors",
                "blue"
              ),
              [sty.slotTargetStartIconcolors_gray]: hasVariant(
                $state,
                "colors",
                "gray"
              ),
              [sty.slotTargetStartIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetStartIconsize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.slotTargetStartIconsize_small]: hasVariant(
                $state,
                "size",
                "small"
              )
            })
          })}
        </div>
      ) : null}
      {renderPlasmicSlot({
        defaultContents: "Enter some text",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrencolors_black]: hasVariant(
            $state,
            "colors",
            "black"
          ),
          [sty.slotTargetChildrencolors_blue]: hasVariant(
            $state,
            "colors",
            "blue"
          ),
          [sty.slotTargetChildrencolors_gray]: hasVariant(
            $state,
            "colors",
            "gray"
          ),
          [sty.slotTargetChildrencolors_link]: hasVariant(
            $state,
            "colors",
            "link"
          ),
          [sty.slotTargetChildreniconOnly]: hasVariant(
            $state,
            "iconOnly",
            "iconOnly"
          ),
          [sty.slotTargetChildrenisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.slotTargetChildrenrounded]: hasVariant(
            $state,
            "rounded",
            "rounded"
          ),
          [sty.slotTargetChildrenrounded_size_large]:
            hasVariant($state, "size", "large") &&
            hasVariant($state, "rounded", "rounded"),
          [sty.slotTargetChildrenshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.slotTargetChildrensize_large]: hasVariant(
            $state,
            "size",
            "large"
          ),
          [sty.slotTargetChildrensize_small]: hasVariant(
            $state,
            "size",
            "small"
          )
        })
      })}
      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__pfeaK, {
            [sty.freeBoxshowEndIcon__pfeaKRsdVe]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBoxsize_small__pfeaK7WhPx]: hasVariant(
              $state,
              "size",
              "small"
            )
          })}
        >
          {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false)
            ? renderPlasmicSlot({
                defaultContents: (
                  <MenuIcon
                    className={classNames(projectcss.all, sty.svg___5Nj9C)}
                    role={"img"}
                  />
                ),

                value: args.endIcon,
                className: classNames(sty.slotTargetEndIcon, {
                  [sty.slotTargetEndIconcolors_black]: hasVariant(
                    $state,
                    "colors",
                    "black"
                  ),
                  [sty.slotTargetEndIconcolors_link]: hasVariant(
                    $state,
                    "colors",
                    "link"
                  ),
                  [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                    $state,
                    "showEndIcon",
                    "showEndIcon"
                  )
                })
              })
            : null}
        </div>
      ) : null}
    </Stack__>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  return b;
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
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
