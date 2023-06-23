import { createElement } from "react";
import { StyledInterface } from "./index";

const Styled = ({ children, className, as = "div" }: StyledInterface) => {
  return createElement(as, { className }, children);
};

export default Styled;
