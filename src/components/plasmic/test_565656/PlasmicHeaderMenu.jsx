// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: cca3NDm-B76v
import * as React from "react";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button2 from "../../Button2"; // plasmic-import: JzEs4dPI9Ib6/component
import { useScreenVariants as useScreenVariantsyOfg4D6YmtF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yOfg4d6Ymt_f/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./PlasmicHeaderMenu.module.css"; // plasmic-import: cca3NDm-B76v/css
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: rzUu4x84rFcl/icon
import CastForEducation24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon from "./icons/PlasmicIcon__CastForEducation24Dp5F6368Fill0Wght400Grad0Opsz24Svg"; // plasmic-import: 3gJd8Wu7Nv_u/icon

createPlasmicElementProxy;

export const PlasmicHeaderMenu__VariantProps = new Array();

export const PlasmicHeaderMenu__ArgProps = new Array();

const $$ = {};

function PlasmicHeaderMenu__RenderFunc(props) {
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
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsyOfg4D6YmtF()
  });
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
      onClick={async event => {
        const $steps = {};
        $steps["goToآموزشها"] = true
          ? (() => {
              const actionArgs = { destination: `/new-page-2` };
              return (({ destination }) => {
                if (
                  typeof destination === "string" &&
                  destination.startsWith("#")
                ) {
                  document
                    .getElementById(destination.substr(1))
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  location.assign(destination);
                }
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["goToآموزشها"] != null &&
          typeof $steps["goToآموزشها"] === "object" &&
          typeof $steps["goToآموزشها"].then === "function"
        ) {
          $steps["goToآموزشها"] = await $steps["goToآموزشها"];
        }
      }}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <Button2
        data-plasmic-name={"button2"}
        data-plasmic-override={overrides.button2}
        className={classNames("__wab_instance", sty.button2)}
        color={"clear"}
        onClick={async event => {
          const $steps = {};
          $steps["goToآموزشها"] = true
            ? (() => {
                const actionArgs = { destination: `/new-page-2` };
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    location.assign(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToآموزشها"] != null &&
            typeof $steps["goToآموزشها"] === "object" &&
            typeof $steps["goToآموزشها"].then === "function"
          ) {
            $steps["goToآموزشها"] = await $steps["goToآموزشها"];
          }
        }}
      >
        <Stack__
          as={PlasmicLink__}
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          onClick={async event => {
            const $steps = {};
          }}
          platform={"react"}
        >
          {false ? (
            <Icon29Icon
              className={classNames(projectcss.all, sty.svg__p56To)}
              role={"img"}
            />
          ) : null}
          <CastForEducation24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon
            className={classNames(projectcss.all, sty.svg__nmfVi)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qy2Na
            )}
          >
            {"\u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627"}
          </div>
          {false ? (
            <Icon29Icon
              className={classNames(projectcss.all, sty.svg__iuFkY)}
              role={"img"}
            />
          ) : null}
          <Stack__
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
            tabIndex={0}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d2YS7
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToآموزشها"] = true
                  ? (() => {
                      const actionArgs = { destination: `/new-page-2` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToآموزشها"] != null &&
                  typeof $steps["goToآموزشها"] === "object" &&
                  typeof $steps["goToآموزشها"].then === "function"
                ) {
                  $steps["goToآموزشها"] = await $steps["goToآموزشها"];
                }
              }}
            >
              {"\u0622\u0632\u0645\u0648\u0646\u200c\u0647\u0627"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sMgx
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToدورهها"] = true
                  ? (() => {
                      const actionArgs = { destination: `/new-page-3` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToدورهها"] != null &&
                  typeof $steps["goToدورهها"] === "object" &&
                  typeof $steps["goToدورهها"].then === "function"
                ) {
                  $steps["goToدورهها"] = await $steps["goToدورهها"];
                }
              }}
            >
              {"\u062f\u0648\u0631\u0647\u200c\u0647\u0627"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tkfMf
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToمسابقات"] = true
                  ? (() => {
                      const actionArgs = { destination: `/new-page-4` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToمسابقات"] != null &&
                  typeof $steps["goToمسابقات"] === "object" &&
                  typeof $steps["goToمسابقات"].then === "function"
                ) {
                  $steps["goToمسابقات"] = await $steps["goToمسابقات"];
                }
              }}
            >
              {"\u0645\u0633\u0627\u0628\u0642\u0627\u062a"}
            </div>
          </Stack__>
        </Stack__>
      </Button2>
      <Stack__
        as={"div"}
        data-plasmic-name={"menu"}
        data-plasmic-override={overrides.menu}
        hasGap={true}
        className={classNames(projectcss.all, sty.menu)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__g8QTj
          )}
          onClick={async event => {
            const $steps = {};
            $steps["goToآموزشها"] = true
              ? (() => {
                  const actionArgs = { destination: `/new-page-2` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      location.assign(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToآموزشها"] != null &&
              typeof $steps["goToآموزشها"] === "object" &&
              typeof $steps["goToآموزشها"].then === "function"
            ) {
              $steps["goToآموزشها"] = await $steps["goToآموزشها"];
            }
          }}
        >
          {"\u0622\u0632\u0645\u0648\u0646\u200c\u0647\u0627"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___8Hx9E
          )}
          onClick={async event => {
            const $steps = {};
            $steps["goToدورهها"] = true
              ? (() => {
                  const actionArgs = { destination: `/new-page-3` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      location.assign(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToدورهها"] != null &&
              typeof $steps["goToدورهها"] === "object" &&
              typeof $steps["goToدورهها"].then === "function"
            ) {
              $steps["goToدورهها"] = await $steps["goToدورهها"];
            }
          }}
        >
          {"\u062f\u0648\u0631\u0647 \u0647\u0627"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lsDk
          )}
          onClick={async event => {
            const $steps = {};
            $steps["goToمسابقات"] = true
              ? (() => {
                  const actionArgs = { destination: `/new-page-4` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      location.assign(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToمسابقات"] != null &&
              typeof $steps["goToمسابقات"] === "object" &&
              typeof $steps["goToمسابقات"].then === "function"
            ) {
              $steps["goToمسابقات"] = await $steps["goToمسابقات"];
            }
          }}
        >
          {"\u0645\u0633\u0627\u0628\u0642\u0627\u062a"}
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button2", "link", "freeBox", "menu"],
  button2: ["button2", "link", "freeBox"],
  link: ["link", "freeBox"],
  freeBox: ["freeBox"],
  menu: ["menu"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeaderMenu__ArgProps,
          internalVariantPropNames: PlasmicHeaderMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeaderMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderMenu";
  } else {
    func.displayName = `PlasmicHeaderMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderMenu = Object.assign(
  // Top-level PlasmicHeaderMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button2: makeNodeComponent("button2"),
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    menu: makeNodeComponent("menu"),
    // Metadata about props expected for PlasmicHeaderMenu
    internalVariantProps: PlasmicHeaderMenu__VariantProps,
    internalArgProps: PlasmicHeaderMenu__ArgProps
  }
);

export default PlasmicHeaderMenu;
/* prettier-ignore-end */
