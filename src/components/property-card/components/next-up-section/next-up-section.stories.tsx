import type { Meta, StoryObj } from "@storybook/react";
import { NextUpSection } from "./next-up-section";

const meta: Meta<typeof NextUpSection> = {
  title: "Components/NextUpSection",
  component: NextUpSection,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          'A section component that displays "Next Up" text with optional action text.',
      },
    },
  },
  argTypes: {
    nextUpText: {
      description: 'Optional text to display below "Next Up"',
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NextUpSection>;

export const Default: Story = {
  args: {
    nextUpText: "Order quote for wall painting",
  },
};

export const WithoutText: Story = {
  args: {},
};

export const ShortText: Story = {
  args: {
    nextUpText: "Call agent",
  },
};

export const LongText: Story = {
  args: {
    nextUpText:
      "Schedule property inspection and prepare documentation for mortgage application",
  },
};

export const SpecialCharacters: Story = {
  args: {
    nextUpText: "Contact agent & schedule viewing (urgent!)",
  },
};

export const NumericText: Story = {
  args: {
    nextUpText: "Complete steps 1-5 of the application process",
  },
};
