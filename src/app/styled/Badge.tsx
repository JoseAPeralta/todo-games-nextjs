import { createElement } from "react";
import { StyledInterface } from "./index";

const Badge = ({ children, className, as = "div" }: StyledInterface) => {
  className = `bg-black rounded-full py-0 px-3 ${className}`;
  return createElement(as, { className }, children);
};

export default Badge;
