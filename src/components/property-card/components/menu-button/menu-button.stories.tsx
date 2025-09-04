import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuButton } from "./menu-button";

const meta: Meta<typeof MenuButton> = {
  title: "Components/MenuButton",
  component: MenuButton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A menu button component with three dots icon for opening context menus.",
      },
    },
  },
  argTypes: {
    onClick: {
      description: "Click handler function",
      action: "clicked",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Menu button clicked"),
  },
};

export const WithoutHandler: Story = {
  args: {},
};

export const WithAlert: Story = {
  args: {
    onClick: () => alert("Menu opened!"),
  },
};
