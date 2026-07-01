import { InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`h-10 w-full rounded border border-purple-light px-3 text-sm text-purple-dark outline-none focus:border-purple-mid ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
