import { Styled } from "./index";
import { StyledInterface } from "./index";

const Card = ({ children, className, as = "div" }: StyledInterface) => {
  className = `grid grid-cols-1 border border-white bg-stone-900 ${className}`;
  return (
    <Styled as={as} className={className}>
      {children}
    </Styled>
  );
};

export default Card;
