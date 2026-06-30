import { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded border border-brand-100 bg-white p-4 shadow-sm ${className}`}
      {...props}
    />
  );
}
