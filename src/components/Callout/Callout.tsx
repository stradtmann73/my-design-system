import { HTMLAttributes } from "react";

export type CalloutProps = HTMLAttributes<HTMLDivElement>;

export function Callout({ className = "", ...props }: CalloutProps) {
  return (
    <div
      className={`rounded border-l-4 border-purple-mid bg-lavender p-4 text-purple-dark ${className}`}
      {...props}
    />
  );
}
