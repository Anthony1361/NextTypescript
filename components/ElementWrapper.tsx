import { FC, ReactNode } from "react";

interface ElementWrapperProps {
  // the elementType could be any Name ....... //
  elementType: "div" | "span" | "h1" | "button";
  children: ReactNode;

  // the className and onClick .. //
  className?: string;
  onClick?: () => void;
}

const ElementWrapper: FC<ElementWrapperProps> = ({
  elementType,
  children,
  className,
  onClick,
}) => {

    // JSX.IntrinsicElements means creating a Union of HTML elememts like spaN, DIV, H1, button etc ..//
    const Element = elementType as keyof JSX.IntrinsicElements

  return <div>
     <Element className={className} onClick={onClick}>
         {children}
     </Element>
  </div>;
};

export default ElementWrapper;
