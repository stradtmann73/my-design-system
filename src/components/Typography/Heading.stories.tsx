import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Typography";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Level1: Story = { args: { level: 1, children: "Heading 1" } };
export const Level2: Story = { args: { level: 2, children: "Heading 2" } };
export const Level3: Story = { args: { level: 3, children: "Heading 3" } };
export const Level4: Story = { args: { level: 4, children: "Heading 4" } };
