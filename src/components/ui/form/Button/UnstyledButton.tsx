import { clsxm } from "@/util/clsxm";
import { forwardRef } from "react";

export type UnstyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type B = HTMLButtonElement;

export const UnstyledButton = forwardRef<B, UnstyledButtonProps>(
  (props, ref) => {
    const c = clsxm("inline-flex items-center", props.className);
    return (
      <button {...props} className={c}>
        {props.children}
      </button>
    );
  }
);

UnstyledButton.displayName = "UnstyledButton";
