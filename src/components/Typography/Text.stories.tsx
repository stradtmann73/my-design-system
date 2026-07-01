import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Typography";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Body1: Story = {
  args: { size: 1, children: "Body / Paragraph 1 — used for lead paragraphs and emphasis text." },
};
export const Body2: Story = {
  args: { size: 2, children: "Body / Paragraph 2 — the default body copy size." },
};
