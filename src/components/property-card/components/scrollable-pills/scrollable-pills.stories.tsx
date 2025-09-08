import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollablePills } from "./scrollable-pills";
import { type DetailPill } from "../pill/pill.types";

const meta: Meta<typeof ScrollablePills> = {
  title: "Components/ScrollablePills",
  component: ScrollablePills,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A scrollable container for pills that supports mouse drag scrolling on desktop. Pills are non-selectable and can be scrolled horizontally when they overflow the container.",
      },
    },
  },
  argTypes: {
    pills: {
      description: "Array of pill data objects to display",
    },
    className: {
      description: "Additional CSS classes to apply to the container",
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollablePills>;

const testPills: DetailPill[] = [
  {
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
  },
  {
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
  {
    id: 3,
    label: "2 Parking",
    icon: (
      <img
        src="/car-filled.svg"
        alt="Parking"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 4,
    label: "3 Floors",
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
  {
    id: 5,
    label: "Pool",
    icon: (
      <img
        src="/key.svg"
        alt="Pool"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 6,
    label: "Garden",
    icon: (
      <img
        src="/key.svg"
        alt="Garden"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 7,
    label: "Gym",
    icon: (
      <img
        src="/key.svg"
        alt="Gym"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 8,
    label: "Balcony",
    icon: (
      <img
        src="/key.svg"
        alt="Balcony"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 9,
    label: "Fireplace",
    icon: (
      <img
        src="/key.svg"
        alt="Fireplace"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 10,
    label: "AC",
    icon: (
      <img
        src="/key.svg"
        alt="AC"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 11,
    label: "WiFi",
    icon: (
      <img
        src="/key.svg"
        alt="WiFi"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
  {
    id: 12,
    label: "Pet Friendly",
    icon: (
      <img
        src="/key.svg"
        alt="Pet Friendly"
        width="16"
        height="16"
        className="text-primary"
      />
    ),
  },
];

export const Default: Story = {
  args: {
    pills: testPills,
  },
};

export const FewPills: Story = {
  args: {
    pills: testPills.slice(0, 3),
  },
};

export const ManyPills: Story = {
  args: {
    pills: testPills,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story shows many pills that will overflow the container and require horizontal scrolling. Try dragging with your mouse to scroll through all the pills.",
      },
    },
  },
};

export const WithCustomStyling: Story = {
  args: {
    pills: testPills,
    className: "border border-gray-200 rounded-lg p-2",
  },
};
