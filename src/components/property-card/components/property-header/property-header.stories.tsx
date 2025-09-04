import type { Meta, StoryObj } from "@storybook/react-vite";
import { PropertyHeader } from "./property-header";

const meta: Meta<typeof PropertyHeader> = {
  title: "Components/PropertyHeader",
  component: PropertyHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A header component that displays property title, subtitle, and KPI score.",
      },
    },
  },
  argTypes: {
    title: {
      description: "The main property title",
      control: "text",
    },
    subtitle: {
      description: "Optional subtitle/location information",
      control: "text",
    },
    kpi: {
      description: "Optional KPI score percentage",
      control: { type: "number", min: 0, max: 100 },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PropertyHeader>;

export const Default: Story = {
  args: {
    title: "Property Name",
    subtitle: "Long Street Name 12a, 1234 Region",
    kpi: 95,
  },
};

export const WithoutKPI: Story = {
  args: {
    title: "Property Without KPI",
    subtitle: "456 Oak Avenue, City",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Property Without Subtitle",
    kpi: 88,
  },
};

export const Minimal: Story = {
  args: {
    title: "Minimal Property",
  },
};

export const LongTitle: Story = {
  args: {
    title: "Very Long Property Title That Might Wrap to Multiple Lines",
    subtitle:
      "12345 Very Long Street Name That Goes On and On, Some Very Long City Name",
    kpi: 92,
  },
};

export const HighKPI: Story = {
  args: {
    title: "High Performance Property",
    subtitle: "789 Premium Lane, Luxury District",
    kpi: 100,
  },
};

export const LowKPI: Story = {
  args: {
    title: "Needs Improvement Property",
    subtitle: "321 Basic Street, Standard Area",
    kpi: 45,
  },
};
