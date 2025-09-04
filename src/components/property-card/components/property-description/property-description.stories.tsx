import type { Meta, StoryObj } from "@storybook/react-vite";
import { PropertyDescription } from "./property-description";

const meta: Meta<typeof PropertyDescription> = {
  title: "Components/PropertyDescription",
  component: PropertyDescription,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A component that displays property description text with line clamping.",
      },
    },
  },
  argTypes: {
    description: {
      description: "Property description text",
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PropertyDescription>;

export const Default: Story = {
  args: {
    description:
      "Discover your perfect retreat in the serene woods of Evergreen Hollow, a picturesque neighborhood celebrated for its lush landscapes and tranquil atmosphere. This enchanting home offers a seamless blend of modern it's lush",
  },
};

export const WithoutDescription: Story = {
  args: {},
};

export const ShortDescription: Story = {
  args: {
    description: "A beautiful property in a great location.",
  },
};

export const LongDescription: Story = {
  args: {
    description:
      "This exceptional property represents the pinnacle of luxury living, offering an unparalleled combination of sophisticated design, premium materials, and cutting-edge technology. Nestled in one of the most prestigious neighborhoods, this stunning residence features expansive living spaces, state-of-the-art amenities, and breathtaking views that will take your breath away. The meticulously crafted interiors showcase the finest finishes and attention to detail, while the outdoor spaces provide the perfect setting for both relaxation and entertainment. This is truly a once-in-a-lifetime opportunity to own a piece of architectural excellence.",
  },
};

export const SingleLine: Story = {
  args: {
    description: "Perfect family home with modern amenities.",
  },
};

export const WithSpecialCharacters: Story = {
  args: {
    description:
      "Amazing property with 3BR/2BA, pool & garden! Contact us today for more info.",
  },
};

export const WithNumbers: Story = {
  args: {
    description:
      "Built in 2020, this 2,500 sq ft home features 4 bedrooms, 3 bathrooms, and a 2-car garage.",
  },
};
