import { clsxm } from "@/util/clsxm";
import { forwardRef } from "react";
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink";

export const UnderlineLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  (props, ref) => {
    const className = clsxm("underline decoration-primary-500");
    return (
      <UnstyledLink {...props} className={className}>
        {props.children}
      </UnstyledLink>
    );
  }
);

UnderlineLink.displayName = "UnderlineLink";
