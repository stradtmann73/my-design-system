import { createElement, HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4;
}

const HEADING_CLASSES: Record<HeadingProps["level"], string> = {
  1: "text-h1",
  2: "text-h2",
  3: "text-h3",
  4: "text-h4",
};

export function Heading({ level, className = "", ...props }: HeadingProps) {
  return createElement(`h${level}`, {
    className: `text-purple-dark ${HEADING_CLASSES[level]} ${className}`,
    ...props,
  });
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 1 | 2;
}

const TEXT_CLASSES: Record<NonNullable<TextProps["size"]>, string> = {
  1: "text-body-1",
  2: "text-body-2",
};

export function Text({ size = 2, className = "", ...props }: TextProps) {
  return (
    <p className={`text-purple-dark ${TEXT_CLASSES[size]} ${className}`} {...props} />
  );
}
