// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eCbx7HJgm8FWkx1AoTEmGN
// Component: WvsUXQJjkTDK
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header002 from "../../Header002"; // plasmic-import: 3GrQwBTmc9Ka/component
import Header from "../../Header"; // plasmic-import: Zb29Ge7OY3u9/component
import Footer2 from "../../Footer2"; // plasmic-import: BFroENaJU506/component
import { useScreenVariants as useScreenVariantsyOfg4D6YmtF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yOfg4d6Ymt_f/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eCbx7HJgm8FWkx1AoTEmGN/projectcss
import sty from "./PlasmicSingleListing.module.css"; // plasmic-import: WvsUXQJjkTDK/css

createPlasmicElementProxy;

export const PlasmicSingleListing__VariantProps = new Array();

export const PlasmicSingleListing__ArgProps = new Array();

const $$ = {};

function PlasmicSingleListing__RenderFunc(props) {
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

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__peAua)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wum7G)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"foreground"}
                data-plasmic-override={overrides.foreground}
                hasGap={true}
                className={classNames(projectcss.all, sty.foreground)}
              >
                <Stack__
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    data-plasmic-name={"column"}
                    data-plasmic-override={overrides.column}
                    className={classNames(projectcss.all, sty.column)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__mC4Ep)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__ikGnR
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f:\u0645\u0633\u06cc\u0631\u06cc \u0628\u0647 \u0633\u0648\u06cc \u0622\u06cc\u0646\u062f\u0647"
                          : "\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f: \u0645\u0633\u06cc\u0631\u06cc \u0628\u0647 \u0633\u0648\u06cc \u0622\u06cc\u0646\u062f\u0647"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__h4M0N
                        )}
                      >
                        {
                          "\u0622\u06cc\u0627 \u0622\u0645\u0627\u062f\u0647\u200c\u0627\u06cc\u062f \u062a\u0627 \u0648\u0627\u0631\u062f \u062f\u0646\u06cc\u0627\u06cc \u0628\u06cc\u200c\u067e\u0627\u06cc\u0627\u0646 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0634\u0648\u06cc\u062f \u0648 \u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u06cc\u06a9\u06cc \u0627\u0632 \u067e\u06cc\u0634\u0631\u0641\u062a\u0647\u200c\u062a\u0631\u06cc\u0646 \u062d\u0648\u0632\u0647\u200c\u0647\u0627\u06cc \u0641\u0646\u0627\u0648\u0631\u06cc \u0628\u0647 \u0686\u0627\u0644\u0634 \u0628\u06a9\u0634\u06cc\u062f\u061f \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f \u0641\u0631\u0635\u062a\u06cc \u0637\u0644\u0627\u06cc\u06cc \u0628\u0631\u0627\u06cc \u062f\u0627\u0646\u0634\u200c\u0622\u0645\u0648\u0632\u0627\u0646\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u062f\u0646\u06cc\u0627\u06cc \u0641\u0646\u0627\u0648\u0631\u06cc \u0639\u0644\u0627\u0642\u0647 \u062f\u0627\u0631\u0646\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0646\u062f \u0645\u0647\u0627\u0631\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0633\u0637\u062d\u06cc \u0628\u0627\u0644\u0627\u062a\u0631 \u0628\u06cc\u0627\u0632\u0645\u0627\u06cc\u0646\u062f."
                        }
                      </div>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__s4JS7
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u0686\u0631\u0627 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc\u061f"
                          : "\u0686\u0631\u0627 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc\u061f"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__t7CKi
                        )}
                      >
                        {
                          "\u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0627\u0645\u0631\u0648\u0632\u060c \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0646\u0642\u0634 \u06a9\u0644\u06cc\u062f\u06cc \u062f\u0631 \u067e\u06cc\u0634\u0631\u0641\u062a\u200c\u0647\u0627\u06cc \u0639\u0644\u0645\u06cc \u0648 \u0635\u0646\u0639\u062a\u06cc \u0627\u06cc\u0641\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u067e\u0632\u0634\u06a9\u06cc \u06af\u0631\u0641\u062a\u0647 \u062a\u0627 \u062e\u0648\u062f\u0631\u0648\u0633\u0627\u0632\u06cc\u060c \u0627\u0632 \u0631\u0628\u0627\u062a\u200c\u0647\u0627 \u062a\u0627 \u062a\u062d\u0644\u06cc\u0644 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0639\u0638\u06cc\u0645\u060c \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u062f\u0646\u06cc\u0627\u06cc \u0645\u0627 \u0631\u0627 \u0645\u062a\u062d\u0648\u0644 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a. \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f \u0646\u0647 \u062a\u0646\u0647\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0648 \u062a\u062c\u0631\u0628\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0632\u0645\u06cc\u0646\u0647 \u0631\u0627 \u0645\u06cc\u200c\u062f\u0647\u062f\u060c \u0628\u0644\u06a9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u0622\u06cc\u0646\u062f\u0647 \u0646\u0632\u062f\u06cc\u06a9 \u0648 \u062f\u0646\u06cc\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627 \u0641\u0646\u0627\u0648\u0631\u06cc \u0634\u06a9\u0644 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f\u060c \u0645\u062a\u0635\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f."
                        }
                      </div>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__aCqfm
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f"
                          : "\u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__j8S77
                        )}
                      >
                        {
                          "\u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f \u062f\u0631 \u0633\u0647 \u0645\u0631\u062d\u0644\u0647 \u0647\u06cc\u062c\u0627\u0646\u200c\u0627\u0646\u06af\u06cc\u0632 \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a:\n\n\u0645\u0631\u062d\u0644\u0647 \u0627\u0648\u0644: \u0622\u0632\u0645\u0648\u0646 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc\n\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647\u060c \u062f\u0627\u0646\u0634\u200c\u0622\u0645\u0648\u0632\u0627\u0646 \u0627\u0632 \u0633\u0631\u0627\u0633\u0631 \u06a9\u0634\u0648\u0631 \u0628\u0647 \u0635\u0648\u0631\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0627\u0646\u0634 \u0627\u0648\u0644\u06cc\u0647 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u062d\u0648\u0632\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc \u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u0646\u062f. \u0627\u06cc\u0646 \u0622\u0632\u0645\u0648\u0646 \u0634\u0627\u0645\u0644 \u0633\u0648\u0627\u0644\u0627\u062a \u062a\u0626\u0648\u0631\u06cc \u0648 \u0645\u0641\u0647\u0648\u0645\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u062f\u0631\u06a9 \u0634\u0645\u0627 \u0627\u0632 \u0627\u0635\u0648\u0644 \u067e\u0627\u06cc\u0647 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\n\u0645\u0631\u062d\u0644\u0647 \u062f\u0648\u0645: \u06a9\u0627\u0631\u06af\u0627\u0647\u200c\u0647\u0627 \u0648 \u0686\u0627\u0644\u0634\u200c\u0647\u0627\u06cc \u0639\u0645\u0644\u06cc\n\u06a9\u0633\u0627\u0646\u06cc \u06a9\u0647 \u0627\u0632 \u0645\u0631\u062d\u0644\u0647 \u0627\u0648\u0644 \u0639\u0628\u0648\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f\u060c \u0648\u0627\u0631\u062f \u0645\u0631\u062d\u0644\u0647 \u0639\u0645\u0644\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647\u060c \u06a9\u0627\u0631\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc \u062a\u062e\u0635\u0635\u06cc \u062a\u0648\u0633\u0637 \u0627\u0633\u0627\u062a\u06cc\u062f \u0628\u0631\u062c\u0633\u062a\u0647 \u0627\u0632 \u062f\u0627\u0646\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0628\u0631\u062a\u0631 \u062f\u0646\u06cc\u0627 \u0648 \u0635\u0646\u0639\u062a \u0628\u0631\u06af\u0632\u0627\u0631 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0634\u0645\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0628\u0627 \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u0648\u0627\u0642\u0639\u06cc \u062f\u0631 \u062d\u0648\u0632\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0645\u0627\u0646\u0646\u062f \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0645\u0627\u0634\u06cc\u0646\u060c \u0628\u06cc\u0646\u0627\u06cc\u06cc \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631 \u0648 \u067e\u0631\u062f\u0627\u0632\u0634 \u0632\u0628\u0627\u0646 \u0637\u0628\u06cc\u0639\u06cc \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f.\n\n\u0645\u0631\u062d\u0644\u0647 \u0646\u0647\u0627\u06cc\u06cc: \u0631\u0642\u0627\u0628\u062a \u0646\u062e\u0628\u06af\u0627\u0646\n\u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0633\u0648\u0645\u060c \u0628\u0631\u062a\u0631\u06cc\u0646\u200c\u0647\u0627 \u062f\u0631 \u06cc\u06a9 \u0631\u0642\u0627\u0628\u062a \u0641\u0634\u0631\u062f\u0647 \u0648 \u062c\u0630\u0627\u0628 \u0628\u0647 \u0645\u0635\u0627\u0641 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0645\u06cc\u200c\u0631\u0648\u0646\u062f. \u0627\u06cc\u0646 \u0631\u0642\u0627\u0628\u062a \u0634\u0627\u0645\u0644 \u062d\u0644 \u0686\u0627\u0644\u0634\u200c\u0647\u0627\u06cc \u067e\u06cc\u0686\u06cc\u062f\u0647 \u0648 \u0627\u0631\u0627\u0626\u0647 \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u0646\u0648\u0622\u0648\u0631\u0627\u0646\u0647 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0627\u0646\u0634 \u0648 \u062e\u0644\u0627\u0642\u06cc\u062a \u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u062f."
                        }
                      </div>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__arWjZ
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u062c\u0648\u0627\u06cc\u0632 \u0648 \u0627\u0641\u062a\u062e\u0627\u0631\u0627\u062a"
                          : "\u062c\u0648\u0627\u06cc\u0632 \u0648 \u0627\u0641\u062a\u062e\u0627\u0631\u0627\u062a"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5VpPn
                        )}
                      >
                        {
                          "40 \u0646\u0641\u0631 \u0628\u0631\u062a\u0631: \u0645\u062f\u0627\u0644\u200c\u0647\u0627\u06cc \u0637\u0644\u0627\u060c \u0646\u0642\u0631\u0647 \u0648 \u0628\u0631\u0646\u0632 \u0628\u0647 \u0628\u0631\u062a\u0631\u06cc\u0646 \u0634\u0631\u06a9\u062a\u200c\u06a9\u0646\u0646\u062f\u06af\u0627\u0646 \u0627\u0647\u062f\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\n\u0645\u062f\u0627\u0644\u200c\u0622\u0648\u0631\u0627\u0646 \u0637\u0644\u0627: \u0628\u0647 \u062a\u06cc\u0645 \u0645\u0644\u06cc \u0627\u06cc\u0631\u0627\u0646 \u0645\u06cc\u200c\u067e\u06cc\u0648\u0646\u062f\u0646\u062f \u0648 \u0634\u0627\u0646\u0633 \u0634\u0631\u06a9\u062a \u062f\u0631 \u0645\u0633\u0627\u0628\u0642\u0627\u062a \u062c\u0647\u0627\u0646\u06cc \u0631\u0627 \u067e\u06cc\u062f\u0627 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.\n\n\u06af\u0648\u0627\u0647\u06cc\u0646\u0627\u0645\u0647 \u0645\u0639\u062a\u0628\u0631: \u062a\u0645\u0627\u0645\u06cc \u0634\u0631\u06a9\u062a\u200c\u06a9\u0646\u0646\u062f\u06af\u0627\u0646 \u06af\u0648\u0627\u0647\u06cc\u0646\u0627\u0645\u0647 \u0631\u0633\u0645\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0648\u0627\u0647\u0646\u062f \u06a9\u0631\u062f."
                        }
                      </div>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__xOlum
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u0627\u0633\u0627\u062a\u06cc\u062f \u0628\u0631\u062c\u0633\u062a\u0647 \u0648 \u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627\u06cc \u067e\u06cc\u0634\u0631\u0641\u062a\u0647"
                          : "\u0627\u0633\u0627\u062a\u06cc\u062f \u0628\u0631\u062c\u0633\u062a\u0647 \u0648 \u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627\u06cc \u067e\u06cc\u0634\u0631\u0641\u062a\u0647"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3ZjDf
                        )}
                      >
                        {
                          "\u06cc\u06a9\u06cc \u0627\u0632 \u0646\u0642\u0627\u0637 \u0642\u0648\u062a \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f\u060c \u062d\u0636\u0648\u0631 \u0627\u0633\u0627\u062a\u06cc\u062f \u0628\u0631\u062c\u0633\u062a\u0647\u200c\u0627\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0627\u0632 \u062f\u0627\u0646\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0628\u0631\u062a\u0631 \u062f\u0646\u06cc\u0627 \u0648 \u0635\u0646\u0639\u062a \u0628\u0647 \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f \u067e\u06cc\u0648\u0633\u062a\u0647\u200c\u0627\u0646\u062f. \u0627\u06cc\u0646 \u0627\u0633\u0627\u062a\u06cc\u062f\u060c \u0628\u0627 \u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627\u06cc \u0639\u0645\u0644\u06cc \u0648 \u067e\u06cc\u0634\u0631\u0641\u062a\u0647\u060c \u062f\u0627\u0646\u0634\u200c\u0622\u0645\u0648\u0632\u0627\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u062d\u0644 \u0686\u0627\u0644\u0634\u200c\u0647\u0627\u06cc \u0648\u0627\u0642\u0639\u06cc \u0622\u0645\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f."
                        }
                      </div>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__gEqc
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u0645\u0632\u0627\u06cc\u0627\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f"
                          : "\u0645\u0632\u0627\u06cc\u0627\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u0627\u0644\u0645\u067e\u06cc\u0627\u062f"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___05Gh7
                        )}
                      >
                        {
                          "\u062a\u062c\u0631\u0628\u0647\u200c\u0627\u06cc \u0645\u0646\u062d\u0635\u0631 \u0628\u0647 \u0641\u0631\u062f: \u0641\u0631\u0635\u062a\u06cc \u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646 \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc\u200c\u0647\u0627\u06cc \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc.\n\n\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0639\u0645\u0644\u06cc: \u0622\u0645\u0648\u0632\u0634\u200c\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0648 \u067e\u0631\u0648\u0698\u0647\u200c\u0645\u062d\u0648\u0631 \u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0628\u0647\u062a\u0631 \u0645\u0641\u0627\u0647\u06cc\u0645.\n\n\u0627\u0631\u062a\u0642\u0627\u06cc \u0645\u0647\u0627\u0631\u062a\u200c\u0647\u0627: \u062a\u0642\u0648\u06cc\u062a \u0645\u0647\u0627\u0631\u062a\u200c\u0647\u0627\u06cc \u062d\u0644 \u0645\u0633\u0626\u0644\u0647\u060c \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc \u0648 \u06a9\u0627\u0631 \u062a\u06cc\u0645\u06cc.\n\n\u0634\u0628\u06a9\u0647\u200c\u0633\u0627\u0632\u06cc: \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0627\u0641\u0631\u0627\u062f \u0647\u0645\u200c\u0641\u06a9\u0631 \u0648 \u0645\u062a\u062e\u0635\u0635 \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0648\u0632\u0647."
                        }
                      </div>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__cIrg5
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "\u0622\u06cc\u0627 \u0622\u0645\u0627\u062f\u0647\u200c\u0627\u06cc\u062f\u061f"
                          : "\u0622\u06cc\u0627 \u0622\u0645\u0627\u062f\u0647\u200c\u0627\u06cc\u062f\u061f"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__a5Axu
                        )}
                      >
                        {
                          "\u0627\u06af\u0631 \u0639\u0644\u0627\u0642\u0647\u200c\u0645\u0646\u062f\u06cc\u062f \u06a9\u0647 \u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0641\u0646\u0627\u0648\u0631\u06cc \u0628\u062f\u0631\u062e\u0634\u06cc\u062f \u0648 \u0627\u0633\u062a\u0639\u062f\u0627\u062f\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u062f\u0646\u06cc\u0627 \u0646\u0634\u0627\u0646 \u062f\u0647\u06cc\u062f\u060c \u0627\u0644\u0645\u067e\u06cc\u0627\u062f \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0622\u0644\u0646\u062f \u0628\u0647\u062a\u0631\u06cc\u0646 \u0641\u0631\u0635\u062a \u0628\u0631\u0627\u06cc \u0634\u0645\u0627\u0633\u062a. \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f \u0648 \u0627\u0648\u0644\u06cc\u0646 \u0642\u062f\u0645 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u0633\u0648\u06cc \u0622\u06cc\u0646\u062f\u0647\u200c\u0627\u06cc \u062f\u0631\u062e\u0634\u0627\u0646 \u0628\u0631\u062f\u0627\u0631\u06cc\u062f.\n\n\u0645\u0646\u062a\u0638\u0631\u062a\u0627\u0646 \u0647\u0633\u062a\u06cc\u0645 \u062a\u0627 \u0628\u0627 \u0647\u0645 \u062f\u0646\u06cc\u0627\u06cc \u0641\u0646\u0627\u0648\u0631\u06cc \u0631\u0627 \u0645\u062a\u062d\u0648\u0644 \u06a9\u0646\u06cc\u0645! \ud83d\ude80"
                        }
                      </div>
                    </Stack__>
                  </div>
                </Stack__>
              </Stack__>
            </Stack__>
          </Stack__>
          <Footer2
            data-plasmic-name={"footer2"}
            data-plasmic-override={overrides.footer2}
            className={classNames("__wab_instance", sty.footer2)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header002",
    "header",
    "foreground",
    "columns",
    "column",
    "footer2"
  ],

  header002: ["header002"],
  header: ["header"],
  foreground: ["foreground", "columns", "column"],
  columns: ["columns", "column"],
  column: ["column"],
  footer2: ["footer2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSingleListing__ArgProps,
          internalVariantPropNames: PlasmicSingleListing__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSingleListing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSingleListing";
  } else {
    func.displayName = `PlasmicSingleListing.${nodeName}`;
  }
  return func;
}

export const PlasmicSingleListing = Object.assign(
  // Top-level PlasmicSingleListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header002: makeNodeComponent("header002"),
    header: makeNodeComponent("header"),
    foreground: makeNodeComponent("foreground"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    footer2: makeNodeComponent("footer2"),
    // Metadata about props expected for PlasmicSingleListing
    internalVariantProps: PlasmicSingleListing__VariantProps,
    internalArgProps: PlasmicSingleListing__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSingleListing;
/* prettier-ignore-end */
