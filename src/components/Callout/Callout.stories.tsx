import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./Callout";

const meta: Meta<typeof Callout> = {
  title: "Components/Callout",
  component: Callout,
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    children: "Use callout boxes for notes, action items, rules, and quotes that need to stand apart from body text. Use sparingly — three or fewer per document section.",
  },
};
