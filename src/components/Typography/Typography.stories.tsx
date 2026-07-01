import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Text } from "./Typography";

const meta: Meta = {
  title: "Components/Typography",
};

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
    </div>
  ),
};

export const BodyText: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Text size={1}>Body / Paragraph 1 — used for lead paragraphs and emphasis text.</Text>
      <Text size={2}>Body / Paragraph 2 — the default body copy size.</Text>
    </div>
  ),
};
