// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: 3GrQwBTmc9Ka
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Button2 from "../../Button2"; // plasmic-import: JzEs4dPI9Ib6/component
import Tilt from "@plasmicpkgs/react-parallax-tilt";
import HeaderMenu from "../../HeaderMenu"; // plasmic-import: cca3NDm-B76v/component
import { useScreenVariants as useScreenVariantsyOfg4D6YmtF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yOfg4d6Ymt_f/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./PlasmicHeader002.module.css"; // plasmic-import: 3GrQwBTmc9Ka/css
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: rzUu4x84rFcl/icon
import Home24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon from "./icons/PlasmicIcon__Home24Dp5F6368Fill0Wght400Grad0Opsz24Svg"; // plasmic-import: 5_x5jquxnN8E/icon
import Info24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon from "./icons/PlasmicIcon__Info24Dp5F6368Fill0Wght400Grad0Opsz24Svg"; // plasmic-import: Sqtp5kUOdXxM/icon
import PhoneInTalk24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon from "./icons/PlasmicIcon__PhoneInTalk24Dp5F6368Fill0Wght400Grad0Opsz24Svg"; // plasmic-import: BTvNmofwISmH/icon
import untitledDesignSvg2UYLhdmKocmA from "./images/untitledDesignSvg2.svg"; // plasmic-import: uYLhdmKocmA-/picture

createPlasmicElementProxy;

export const PlasmicHeader002__VariantProps = new Array();

export const PlasmicHeader002__ArgProps = new Array();

const $$ = {};

function PlasmicHeader002__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsyOfg4D6YmtF()
  });
  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <div className={classNames(projectcss.all, sty.freeBox__sUsLz)}>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__iUvRx
            )}
            href={"#"}
            platform={"react"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__gsHfy)}
              displayHeight={"60px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"60px"}
              src={{
                src: untitledDesignSvg2UYLhdmKocmA,
                fullWidth: 375,
                fullHeight: 375,
                aspectRatio: 1
              }}
            />
          </PlasmicLink__>
          <Button2
            data-plasmic-name={"button2"}
            data-plasmic-override={overrides.button2}
            className={classNames("__wab_instance", sty.button2)}
            color={"green"}
            onClick={async event => {
              const $steps = {};
              $steps["goToLogin"] = true
                ? (() => {
                    const actionArgs = {};
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
                $steps["goToLogin"] != null &&
                typeof $steps["goToLogin"] === "object" &&
                typeof $steps["goToLogin"].then === "function"
              ) {
                $steps["goToLogin"] = await $steps["goToLogin"];
              }
            }}
            shape={"sharp"}
          >
            <Tilt
              data-plasmic-name={"tilt"}
              data-plasmic-override={overrides.tilt}
              className={classNames("__wab_instance", sty.tilt)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gn9PR
                )}
              >
                {"\u0648\u0631\u0648\u062f"}
              </div>
            </Tilt>
          </Button2>
        </div>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___6Fise)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      forceOpenMenu={
        hasVariant(globalVariants, "screen", "mobileOnly") ? true : undefined
      }
      itemsGap={hasVariant(globalVariants, "screen", "mobileOnly") ? 0 : 8}
      menuItems={
        <React.Fragment>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__oTa98
            )}
            href={"/"}
            onClick={async event => {
              const $steps = {};
              $steps["goToHome"] = true
                ? (() => {
                    const actionArgs = { destination: `/` };
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
                $steps["goToHome"] != null &&
                typeof $steps["goToHome"] === "object" &&
                typeof $steps["goToHome"].then === "function"
              ) {
                $steps["goToHome"] = await $steps["goToHome"];
              }
            }}
            platform={"react"}
          >
            {"\u062e\u0627\u0646\u0647"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__un8X2
            )}
            href={"/"}
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
            platform={"react"}
          >
            {"\u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__jwG1T
            )}
            href={"/"}
            onClick={async event => {
              const $steps = {};
              $steps["goToدربارهما"] = true
                ? (() => {
                    const actionArgs = { destination: `/about` };
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
                $steps["goToدربارهما"] != null &&
                typeof $steps["goToدربارهما"] === "object" &&
                typeof $steps["goToدربارهما"].then === "function"
              ) {
                $steps["goToدربارهما"] = await $steps["goToدربارهما"];
              }
            }}
            platform={"react"}
          >
            {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__h9QQ
            )}
            href={"/"}
            onClick={async event => {
              const $steps = {};
              $steps["goToتماسباما"] = true
                ? (() => {
                    const actionArgs = { destination: `/new-page` };
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
                $steps["goToتماسباما"] != null &&
                typeof $steps["goToتماسباما"] === "object" &&
                typeof $steps["goToتماسباما"].then === "function"
              ) {
                $steps["goToتماسباما"] = await $steps["goToتماسباما"];
              }
            }}
            platform={"react"}
          >
            {"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}
          </PlasmicLink__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pKgT)}
          >
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__nIUcT
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToHome"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
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
                  $steps["goToHome"] != null &&
                  typeof $steps["goToHome"] === "object" &&
                  typeof $steps["goToHome"].then === "function"
                ) {
                  $steps["goToHome"] = await $steps["goToHome"];
                }
                $steps["updateStateVariable"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        undefined;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateStateVariable"] != null &&
                  typeof $steps["updateStateVariable"] === "object" &&
                  typeof $steps["updateStateVariable"].then === "function"
                ) {
                  $steps["updateStateVariable"] = await $steps[
                    "updateStateVariable"
                  ];
                }
              }}
              platform={"react"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__rAGrY)}
                  role={"img"}
                />
              ) : null}
              <Home24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon
                className={classNames(projectcss.all, sty.svg___9YV3X)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wNm0
                )}
              >
                {"\u062e\u0627\u0646\u0647"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__d0Qnv)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <HeaderMenu
              data-plasmic-name={"headerMenu"}
              data-plasmic-override={overrides.headerMenu}
              className={classNames("__wab_instance", sty.headerMenu)}
            />

            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"aboutUs"}
              data-plasmic-override={overrides.aboutUs}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.aboutUs)}
              platform={"react"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__nxf1W)}
                  role={"img"}
                />
              ) : null}
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__lwJrs)}
                  role={"img"}
                />
              ) : null}
              <Info24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon
                className={classNames(projectcss.all, sty.svg__axxr8)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ktkpl
                )}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToدربارهما"] = true
                    ? (() => {
                        const actionArgs = { destination: `/about` };
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
                    $steps["goToدربارهما"] != null &&
                    typeof $steps["goToدربارهما"] === "object" &&
                    typeof $steps["goToدربارهما"].then === "function"
                  ) {
                    $steps["goToدربارهما"] = await $steps["goToدربارهما"];
                  }
                  $steps["updateStateVariable"] = true
                    ? (() => {
                        const actionArgs = {};
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          undefined;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateStateVariable"] != null &&
                    typeof $steps["updateStateVariable"] === "object" &&
                    typeof $steps["updateStateVariable"].then === "function"
                  ) {
                    $steps["updateStateVariable"] = await $steps[
                      "updateStateVariable"
                    ];
                  }
                }}
              >
                {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}
              </div>
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___0UXl
              )}
              platform={"react"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__cx5Jb)}
                  role={"img"}
                />
              ) : null}
              <PhoneInTalk24Dp5F6368Fill0Wght400Grad0Opsz24SvgIcon
                className={classNames(projectcss.all, sty.svg__xuJl7)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h8Pe
                )}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToتماسباما"] = true
                    ? (() => {
                        const actionArgs = { destination: `/new-page` };
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
                    $steps["goToتماسباما"] != null &&
                    typeof $steps["goToتماسباما"] === "object" &&
                    typeof $steps["goToتماسباما"].then === "function"
                  ) {
                    $steps["goToتماسباما"] = await $steps["goToتماسباما"];
                  }
                  $steps["updateStateVariable"] = true
                    ? (() => {
                        const actionArgs = {};
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          undefined;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateStateVariable"] != null &&
                    typeof $steps["updateStateVariable"] === "object" &&
                    typeof $steps["updateStateVariable"].then === "function"
                  ) {
                    $steps["updateStateVariable"] = await $steps[
                      "updateStateVariable"
                    ];
                  }
                }}
              >
                {"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__u7QbS)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
        </React.Fragment>
      }
      openButton={
        <div className={classNames(projectcss.all, sty.freeBox__iJbl3)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__jkYxj)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/menu.svg"}
            width={"30"}
          />
        </div>
      }
      responsiveBreakpoint={768}
    />
  );
}

const PlasmicDescendants = {
  root: ["root", "button2", "tilt", "headerMenu", "aboutUs"],
  button2: ["button2", "tilt"],
  tilt: ["tilt"],
  headerMenu: ["headerMenu"],
  aboutUs: ["aboutUs"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader002__ArgProps,
          internalVariantPropNames: PlasmicHeader002__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader002__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader002";
  } else {
    func.displayName = `PlasmicHeader002.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader002 = Object.assign(
  // Top-level PlasmicHeader002 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button2: makeNodeComponent("button2"),
    tilt: makeNodeComponent("tilt"),
    headerMenu: makeNodeComponent("headerMenu"),
    aboutUs: makeNodeComponent("aboutUs"),
    // Metadata about props expected for PlasmicHeader002
    internalVariantProps: PlasmicHeader002__VariantProps,
    internalArgProps: PlasmicHeader002__ArgProps
  }
);

export default PlasmicHeader002;
/* prettier-ignore-end */
