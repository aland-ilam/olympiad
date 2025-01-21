// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: b_rW21EHwfb2
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header002 from "../../Header002"; // plasmic-import: 3GrQwBTmc9Ka/component
import Header from "../../Header"; // plasmic-import: Zb29Ge7OY3u9/component
import Tilt from "@plasmicpkgs/react-parallax-tilt";
import Footer2 from "../../Footer2"; // plasmic-import: BFroENaJU506/component
import { useScreenVariants as useScreenVariantsyOfg4D6YmtF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yOfg4d6Ymt_f/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./Plasmicآموزشها.module.css"; // plasmic-import: b_rW21EHwfb2/css
import TelegramLogoSvgrepoComSvgIcon from "./icons/PlasmicIcon__TelegramLogoSvgrepoComSvg"; // plasmic-import: 3KAJ5fuo8kHy/icon
import Main4ShadLogoFarsgraphicSvgIcon from "./icons/PlasmicIcon__Main4ShadLogoFarsgraphicSvg"; // plasmic-import: drPbsBVNhdKb/icon

createPlasmicElementProxy;

export const Plasmicآموزشها__VariantProps = new Array();

export const Plasmicآموزشها__ArgProps = new Array();

const $$ = {};

function Plasmicآموزشها__RenderFunc(props) {
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
          <Header002
            data-plasmic-name={"header002"}
            data-plasmic-override={overrides.header002}
            className={classNames("__wab_instance", sty.header002)}
          />

          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__zXyN)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gl7Xy
              )}
            >
              {"\u0622\u0645\u0648\u0632\u0634 \u0647\u0627"}
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__gyGsW)}>
                <Tilt
                  className={classNames("__wab_instance", sty.tilt___8BwCu)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a2Y3W
                    )}
                    title={
                      " \u062f\u0631 \u062d\u0627\u0644 \u0633\u0627\u062e\u062a..."
                    }
                  >
                    {"\u0622\u0632\u0645\u0648\u0646\u200c\u0647\u0627"}
                  </div>
                </Tilt>
              </div>
              <div className={classNames(projectcss.all, sty.column__yi62R)}>
                <Tilt className={classNames("__wab_instance", sty.tilt__puvPw)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eKnZl
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
                </Tilt>
              </div>
              <div className={classNames(projectcss.all, sty.column___5Cwwo)}>
                <Tilt className={classNames("__wab_instance", sty.tilt__eAtQe)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7DplK
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
                </Tilt>
              </div>
            </Stack__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ir9R4
              )}
            >
              {
                "\u2728 \u0628\u0627 \u0639\u0636\u0648\u06cc\u062a \u062f\u0631 \u06a9\u0627\u0646\u0627\u0644 \u0634\u0627\u062f \u06cc\u0627 \u062a\u0644\u06af\u0631\u0627\u0645\u060c \u0627\u0632 \u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646 \u0627\u062e\u0628\u0627\u0631  \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc\u060c \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0648 \u0645\u0637\u0627\u0644\u0628 \u0645\u0641\u06cc\u062f \u0647\u06cc\u062c\u0627\u0646\u200c\u0627\u0646\u06af\u06cc\u0632 \u0644\u0630\u062a \u0628\u0628\u0631\u06cc\u062f! \ud83d\udcf2 "
              }
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__u7D0J)}
            >
              <TelegramLogoSvgrepoComSvgIcon
                className={classNames(projectcss.all, sty.svg__xlOeF)}
                cursor={"Pointer "}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToHttpsTMeAiOlympiadAland"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: "https://t.me/AI_Olympiad_aland"
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
                    $steps["goToHttpsTMeAiOlympiadAland"] != null &&
                    typeof $steps["goToHttpsTMeAiOlympiadAland"] === "object" &&
                    typeof $steps["goToHttpsTMeAiOlympiadAland"].then ===
                      "function"
                  ) {
                    $steps["goToHttpsTMeAiOlympiadAland"] = await $steps[
                      "goToHttpsTMeAiOlympiadAland"
                    ];
                  }
                }}
                role={"img"}
              />

              <Main4ShadLogoFarsgraphicSvgIcon
                className={classNames(projectcss.all, sty.svg__yq5Rl)}
                cursor={"Pointer "}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToHttpsShadIrAiOlympiadAland"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: "https://shad.ir/AI_Olympiad_aland"
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
                    $steps["goToHttpsShadIrAiOlympiadAland"] != null &&
                    typeof $steps["goToHttpsShadIrAiOlympiadAland"] ===
                      "object" &&
                    typeof $steps["goToHttpsShadIrAiOlympiadAland"].then ===
                      "function"
                  ) {
                    $steps["goToHttpsShadIrAiOlympiadAland"] = await $steps[
                      "goToHttpsShadIrAiOlympiadAland"
                    ];
                  }
                }}
                role={"img"}
              />
            </Stack__>
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
  root: ["root", "header002", "header", "columns", "footer2"],
  header002: ["header002"],
  header: ["header"],
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
          internalArgPropNames: Plasmicآموزشها__ArgProps,
          internalVariantPropNames: Plasmicآموزشها__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmicآموزشها__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic\u0622\u0645\u0648\u0632\u0634\u0647\u0627";
  } else {
    func.displayName = `Plasmicآموزشها.${nodeName}`;
  }
  return func;
}

export const Plasmicآموزشها = Object.assign(
  // Top-level Plasmicآموزشها renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header002: makeNodeComponent("header002"),
    header: makeNodeComponent("header"),
    columns: makeNodeComponent("columns"),
    footer2: makeNodeComponent("footer2"),
    // Metadata about props expected for Plasmicآموزشها
    internalVariantProps: Plasmicآموزشها__VariantProps,
    internalArgProps: Plasmicآموزشها__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmicآموزشها;
/* prettier-ignore-end */
