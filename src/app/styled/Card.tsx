import { Styled } from "./index";
import { StyledInterface } from "./index";

const Card = ({ children, className, as = "div" }: StyledInterface) => {
  className = ` border bg-stone-900 ${className}`;
  return (
    <Styled as={as} className={className}>
      {children}
    </Styled>
  );
};

export default Card;
