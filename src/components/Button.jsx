import * as React from "react";
import { PlasmicButton } from "./plasmic/test_565656/PlasmicButton";

function Button_(props, ref) {
  const { plasmicProps } = PlasmicButton.useBehavior(props, ref);
  return <PlasmicButton {...plasmicProps} />;
}

const Button = React.forwardRef(Button_);

export default Object.assign(Button, { __plumeType: "button" });
