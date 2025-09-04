import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pill } from "./pill";
import { type DetailPill } from "./pill.types";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A pill component that displays property details with optional icons and click handlers.",
      },
    },
  },
  argTypes: {
    pill: {
      description:
        "Pill data object containing label, icon, and optional click handler",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pill>;

const mockPill: DetailPill = {
  id: 1,
  label: "3 Owners",
  icon: (
    <img
      src="/users.svg"
      alt="Owners"
      width="16"
      height="16"
      className="text-primary"
    />
  ),
};

export const Default: Story = {
  args: {
    pill: mockPill,
  },
};

export const WithIcon: Story = {
  args: {
    pill: {
      id: 2,
      label: "4 Units",
      icon: (
        <img
          src="/unit-filled.svg"
          alt="Units"
          width="16"
          height="16"
          className="text-primary"
        />
      ),
    },
  },
};

export const WithoutIcon: Story = {
  args: {
    pill: {
      id: 3,
      label: "No Icon Pill",
    },
  },
};

export const Clickable: Story = {
  args: {
    pill: {
      id: 4,
      label: "Clickable Pill",
      icon: (
        <img
          src="/car-filled.svg"
          alt="Parking"
          width="16"
          height="16"
          className="text-primary"
        />
      ),
      onClick: () => console.log("Pill clicked!"),
    },
  },
};

export const LongLabel: Story = {
  args: {
    pill: {
      id: 5,
      label: "Very Long Label That Might Test Text Wrapping",
      icon: (
        <img
          src="/stack-floors.svg"
          alt="Floors"
          width="16"
          height="16"
          className="text-primary"
        />
      ),
    },
  },
};

export const ShortLabel: Story = {
  args: {
    pill: {
      id: 6,
      label: "Short",
      icon: (
        <img
          src="/key.svg"
          alt="Key"
          width="16"
          height="16"
          className="text-primary"
        />
      ),
    },
  },
};

export const NumericLabel: Story = {
  args: {
    pill: {
      id: 7,
      label: "99+",
      icon: (
        <img
          src="/users.svg"
          alt="Count"
          width="16"
          height="16"
          className="text-primary"
        />
      ),
    },
  },
};

export const SpecialCharacters: Story = {
  args: {
    pill: {
      id: 8,
      label: "Special & Characters!",
      icon: (
        <img
          src="/key.svg"
          alt="Special"
          width="16"
          height="16"
          className="text-primary"
        />
      ),
    },
  },
};
