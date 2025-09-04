import type { Meta, StoryObj } from "@storybook/react";
import { PropertyCard } from "./property-card";
import { type DetailPill } from "./components/pill/pill.types";

const mockPills: DetailPill[] = [
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
];

const meta: Meta<typeof PropertyCard> = {
  title: "Components/PropertyCard",
  component: PropertyCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A comprehensive property card component that displays property information with images, details, and actions.",
      },
    },
  },
  argTypes: {
    property: {
      description: "Property data object containing all property information",
    },
    actions: {
      description: "Action handlers for user interactions",
    },
    className: {
      description: "Additional CSS classes to apply to the card",
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PropertyCard>;

export const Default: Story = {
  args: {
    property: {
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      ],
      title: "Property Name",
      subtitle: "Long Street Name 12a, 1234 Region",
      description:
        "Discover your perfect retreat in the serene woods of Evergreen Hollow, a picturesque neighborhood celebrated for its lush landscapes and tranquil atmosphere. This enchanting home offers a seamless blend of modern it's lush",
      kpi: 95,
      nextUpText: "Order quote for wall painting",
      details: mockPills,
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const SingleImage: Story = {
  args: {
    property: {
      images:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      title: "Single Image Property",
      subtitle: "123 Main Street, City",
      description: "A beautiful property with a single stunning image.",
      kpi: 88,
      nextUpText: "Schedule viewing",
      details: mockPills.slice(0, 2),
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const Minimal: Story = {
  args: {
    property: {
      images:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      title: "Minimal Property",
      subtitle: "456 Oak Avenue",
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const WithoutKPI: Story = {
  args: {
    property: {
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      ],
      title: "Property Without KPI",
      subtitle: "789 Pine Street, Suburb",
      description: "This property doesn't have a KPI score displayed.",
      nextUpText: "Contact agent",
      details: mockPills,
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const WithoutDetails: Story = {
  args: {
    property: {
      images:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      title: "Property Without Details",
      subtitle: "321 Elm Street, Downtown",
      description: "This property doesn't have any detail pills displayed.",
      kpi: 92,
      nextUpText: "Request information",
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const ManyDetails: Story = {
  args: {
    property: {
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      ],
      title: "Luxury Property with Many Details",
      subtitle: "555 Luxury Lane, Premium District",
      description:
        "An exceptional luxury property with extensive amenities and features. This stunning home offers unparalleled comfort and style in one of the most sought-after locations.",
      kpi: 98,
      nextUpText: "Schedule private tour",
      details: [
        ...mockPills,
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
      ],
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const LongContent: Story = {
  args: {
    property: {
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      ],
      title:
        "Property with Very Long Title That Might Overflow or Wrap to Multiple Lines",
      subtitle:
        "12345 Very Long Street Name That Goes On and On, Some Very Long City Name That Also Continues, State",
      description:
        "This is an extremely long description that will test how the component handles text overflow and wrapping. The description should be truncated or wrapped appropriately to maintain the component's visual integrity. This property offers numerous features and amenities that make it an exceptional choice for discerning buyers who are looking for something truly special in the real estate market.",
      kpi: 87,
      nextUpText:
        "Very long next up text that might also test text wrapping and overflow behavior",
      details: mockPills,
    },
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};

export const WithoutActions: Story = {
  args: {
    property: {
      images:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      title: "Property Without Actions",
      subtitle: "999 Action Street, No Actions",
      description:
        "This property card doesn't have any action handlers defined.",
      kpi: 75,
      details: mockPills.slice(0, 3),
    },
  },
};

export const CustomStyling: Story = {
  args: {
    property: {
      images:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      title: "Custom Styled Property",
      subtitle: "888 Style Avenue, Custom City",
      description: "This property card has custom styling applied.",
      kpi: 90,
      details: mockPills,
    },
    className: "border-2 border-blue-500 rounded-lg",
    actions: {
      onMenuClick: () => console.log("Menu clicked"),
    },
  },
};
