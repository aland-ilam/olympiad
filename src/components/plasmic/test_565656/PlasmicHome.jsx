// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: 2sR6FPb-fiQA
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header from "../../Header"; // plasmic-import: Zb29Ge7OY3u9/component
import Header002 from "../../Header002"; // plasmic-import: 3GrQwBTmc9Ka/component
import Tilt from "@plasmicpkgs/react-parallax-tilt";
import Button2 from "../../Button2"; // plasmic-import: JzEs4dPI9Ib6/component
import Ostad from "../../Ostad"; // plasmic-import: GFq5AX6mQYOS/component
import Footer2 from "../../Footer2"; // plasmic-import: BFroENaJU506/component
import { useScreenVariants as useScreenVariantsyOfg4D6YmtF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yOfg4d6Ymt_f/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: 2sR6FPb-fiQA/css
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: rzUu4x84rFcl/icon
import المپیادآلند13SvgRaPvyTKt6Vl3 from "./images/\u0627\u0644\u0645\u067E\u06CC\u0627\u062F\u0622\u0644\u0646\u062F13Svg.svg"; // plasmic-import: raPvyTKt6VL3/picture

createPlasmicElementProxy;

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

const $$ = {};

function PlasmicHome__RenderFunc(props) {
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
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          dir={"rtl"}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Header002
            data-plasmic-name={"header002"}
            data-plasmic-override={overrides.header002}
            className={classNames("__wab_instance", sty.header002)}
          />

          <div className={classNames(projectcss.all, sty.freeBox___6GDKv)}>
            <div className={classNames(projectcss.all, sty.freeBox__qLeqR)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"foreground2"}
                data-plasmic-override={overrides.foreground2}
                hasGap={true}
                className={classNames(projectcss.all, sty.foreground2)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__czZQw)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f"
                      : "\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___31De
                    )}
                  >
                    {
                      "\u0633\u06a9\u0648\u06cc \u067e\u0631\u062a\u0627\u0628 \u0634\u0645\u0627 \u0628\u0647 \u0633\u0648\u06cc \u0646\u0648\u0622\u0648\u0631\u06cc\u200c\u0647\u0627\u06cc \u0622\u06cc\u0646\u062f\u0647!"
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__tSpne)}
                >
                  <Tilt
                    data-plasmic-name={"tilt"}
                    data-plasmic-override={overrides.tilt}
                    className={classNames("__wab_instance", sty.tilt)}
                  >
                    <Stack__
                      as={"button"}
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.button
                      )}
                      disabled={false}
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
                      title={``}
                    >
                      {false ? (
                        <Icon29Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___5AQ26
                          )}
                          role={"img"}
                        />
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dAd9G
                        )}
                      >
                        {
                          "\u0634\u0631\u0648\u0639 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"
                        }
                      </div>
                      {false ? (
                        <Icon29Icon
                          className={classNames(projectcss.all, sty.svg___0K6W)}
                          role={"img"}
                        />
                      ) : null}
                    </Stack__>
                  </Tilt>
                </Stack__>
              </Stack__>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__rrS7M)}>
            <div className={classNames(projectcss.all, sty.freeBox__xbcn1)}>
              <div className={classNames(projectcss.all, sty.freeBox__nHta5)}>
                <div className={classNames(projectcss.all, sty.freeBox__u2X9W)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dd44V
                    )}
                  >
                    {
                      "\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc"
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wYehB
                    )}
                  >
                    {
                      "\n\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc\u060c \u0641\u0631\u0635\u062a\u06cc \u0628\u06cc\u200c\u0646\u0638\u06cc\u0631 \u0628\u0631\u0627\u06cc \u062f\u0627\u0646\u0634\u200c\u0622\u0645\u0648\u0632\u0627\u0646 \u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0641\u0646\u0627\u0648\u0631\u06cc! \n\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u062f\u0631 \u0633\u0647 \u0645\u0631\u062d\u0644\u0647 \u062f\u0627\u0646\u0634 \u0648 \u0645\u0647\u0627\u0631\u062a\u200c\u062a\u0627\u0646 \u0631\u0627 \u0645\u06cc\u200c\u0633\u0646\u062c\u062f.  \n40 \u0646\u0641\u0631 \u0628\u0631\u062a\u0631 \u0645\u062f\u0627\u0644 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f \u0648 \u0628\u0631\u0646\u062f\u06af\u0627\u0646 \u0645\u062f\u0627\u0644 \u0637\u0644\u0627 \u0628\u0647 \u062a\u06cc\u0645 \u0645\u0644\u06cc \u0627\u06cc\u0631\u0627\u0646 \u0645\u06cc\u200c\u067e\u06cc\u0648\u0646\u062f\u0646\u062f.  \n\u0622\u0645\u0627\u062f\u0647\u200c\u0627\u06cc\u062f \u06cc\u0627\u062f\u0628\u06af\u06cc\u0631\u06cc\u062f\u061f"
                    }
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aMqmV)}
                  >
                    <Button2
                      data-plasmic-name={"button2"}
                      data-plasmic-override={overrides.button2}
                      className={classNames("__wab_instance", sty.button2)}
                      color={"link"}
                      onClick={async event => {
                        const $steps = {};
                        $steps["goToSingleListing"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: `/single-listing`
                              };
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
                          $steps["goToSingleListing"] != null &&
                          typeof $steps["goToSingleListing"] === "object" &&
                          typeof $steps["goToSingleListing"].then === "function"
                        ) {
                          $steps["goToSingleListing"] = await $steps[
                            "goToSingleListing"
                          ];
                        }
                      }}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wvvWb
                        )}
                      >
                        {
                          "\u0628\u06cc\u0634\u062a\u0631 \u0628\u062f\u0627\u0646\u06cc\u062f..."
                        }
                      </div>
                    </Button2>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__eOgKr)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nbRcr
                )}
              >
                {
                  "\u06a9\u0646\u0627\u0631\u062a\u0648\u0646 \u0647\u0633\u062a\u06cc\u0645 \u062a\u0627 \u0628\u0627 \u0647\u0645 \u06cc\u06a9 \u0642\u062f\u0645 \u0628\u0647 \u0633\u0648\u06cc \u0622\u06cc\u0646\u062f\u0647 \u0628\u0631\u062f\u0627\u0631\u06cc\u0645!"
                }
              </div>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"1000px"}
                loading={"lazy"}
                src={{
                  src: المپیادآلند13SvgRaPvyTKt6Vl3,
                  fullWidth: 1440,
                  fullHeight: 810,
                  aspectRatio: 1.777778
                }}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__ouQbg)}>
            <div className={classNames(projectcss.all, sty.freeBox__w7QTt)} />
          </div>
          <Ostad
            data-plasmic-name={"ostad"}
            data-plasmic-override={overrides.ostad}
            className={classNames("__wab_instance", sty.ostad)}
          />

          <div
            data-plasmic-name={
              "\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc\u062f\u0631\u0622\u0644\u0646\u062f"
            }
            data-plasmic-override={overrides.یادگیریدرآلند}
            className={classNames(projectcss.all, sty.یادگیریدرآلند)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aYhH1
              )}
            >
              {
                "\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u062f\u0631 \u0622\u0644\u0646\u062f"
              }
            </div>
          </div>
          <div
            data-plasmic-name={"\u06af\u0632\u06cc\u0646\u0647\u0647\u0627"}
            data-plasmic-override={overrides.گزینهها}
            className={classNames(projectcss.all, sty.گزینهها)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__u5S4Z)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__zo2Tq)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__k7PtZ)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__lvidl
                      )}
                    >
                      {
                        "\u0627\u0631\u0632\u06cc\u0627\u0628\u06cc \u0648 \u0622\u0632\u0645\u0648\u0646"
                      }
                    </h2>
                  </Stack__>
                </Stack__>
                <div className={classNames(projectcss.all, sty.column__a5MeS)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___7SVzk)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__ufCom
                      )}
                    >
                      {
                        "\u0622\u0645\u0648\u0632\u0634 \u06af\u0627\u0645 \u0628\u0647 \u06af\u0627\u0645"
                      }
                    </h2>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__xDutY)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__lizmL)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2___9Xc2O
                      )}
                    >
                      {"\u0646\u0642\u0634\u0647 \u0631\u0627\u0647"}
                    </h2>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__x5Lip)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__fz08)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__lcvBx
                      )}
                    >
                      {"\u0645\u0646\u062a\u0648\u0631\u06cc\u0646\u06af"}
                    </h2>
                  </Stack__>
                </div>
              </Stack__>
            </div>
          </div>
          <Footer2
            data-plasmic-name={"footer2"}
            data-plasmic-override={overrides.footer2}
            className={classNames("__wab_instance", sty.footer2)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "header002",
    "foreground2",
    "h1",
    "tilt",
    "button",
    "button2",
    "img",
    "ostad",
    "\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc\u062f\u0631\u0622\u0644\u0646\u062f",
    "\u06af\u0632\u06cc\u0646\u0647\u0647\u0627",
    "columns",
    "footer2"
  ],

  header: ["header"],
  header002: ["header002"],
  foreground2: ["foreground2", "h1", "tilt", "button"],
  h1: ["h1"],
  tilt: ["tilt", "button"],
  button: ["button"],
  button2: ["button2"],
  img: ["img"],
  ostad: ["ostad"],
  یادگیریدرآلند: [
    "\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc\u062f\u0631\u0622\u0644\u0646\u062f"
  ],

  گزینهها: ["\u06af\u0632\u06cc\u0646\u0647\u0647\u0627", "columns"],
  columns: ["columns"],
  footer2: ["footer2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    header002: makeNodeComponent("header002"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    tilt: makeNodeComponent("tilt"),
    button: makeNodeComponent("button"),
    button2: makeNodeComponent("button2"),
    img: makeNodeComponent("img"),
    ostad: makeNodeComponent("ostad"),
    یادگیریدرآلند: makeNodeComponent(
      "\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc\u062f\u0631\u0622\u0644\u0646\u062f"
    ),
    گزینهها: makeNodeComponent("\u06af\u0632\u06cc\u0646\u0647\u0647\u0627"),
    columns: makeNodeComponent("columns"),
    footer2: makeNodeComponent("footer2"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
