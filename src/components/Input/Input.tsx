import { InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`h-10 w-full rounded border border-brand-100 px-3 text-sm outline-none focus:border-brand-500 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
