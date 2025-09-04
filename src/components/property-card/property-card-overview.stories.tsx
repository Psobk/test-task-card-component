import type { Meta, StoryObj } from "@storybook/react-vite";
import { PropertyCard } from "./property-card";
import { type DetailPill } from "./components/pill/pill.types";

const meta: Meta<typeof PropertyCard> = {
  title: "Overview/PropertyCard Showcase",
  component: PropertyCard,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive showcase of the PropertyCard component and its variations.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PropertyCard>;

// Comprehensive mock data
const comprehensivePills: DetailPill[] = [
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
];

export const Showcase: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Property Card Component Showcase
          </h1>

          {/* Complete Property Card */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Complete Property Card
            </h2>
            <PropertyCard
              property={{
                images: [
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
                  "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
                  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                ],
                title: "Luxury Modern Villa",
                subtitle: "1234 Premium Avenue, Beverly Hills, CA 90210",
                description:
                  "Discover your perfect retreat in the serene woods of Evergreen Hollow, a picturesque neighborhood celebrated for its lush landscapes and tranquil atmosphere. This enchanting home offers a seamless blend of modern luxury and natural beauty.",
                kpi: 98,
                nextUpText:
                  "Schedule private viewing with our luxury real estate specialist",
                details: comprehensivePills,
              }}
              actions={{
                onMenuClick: () => console.log("Menu clicked"),
              }}
            />
          </div>

          {/* Minimal Property Card */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Minimal Property Card
            </h2>
            <PropertyCard
              property={{
                images:
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
                title: "Simple Property",
                subtitle: "456 Basic Street, Suburb",
              }}
              actions={{
                onMenuClick: () => console.log("Menu clicked"),
              }}
            />
          </div>

          {/* High KPI Property */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              High Performance Property
            </h2>
            <PropertyCard
              property={{
                images: [
                  "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
                  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                ],
                title: "Perfect Investment Property",
                subtitle: "789 Investment Boulevard, Financial District",
                description:
                  "An exceptional investment opportunity with outstanding returns and growth potential.",
                kpi: 100,
                nextUpText: "Review investment analysis report",
                details: comprehensivePills.slice(0, 4),
              }}
              actions={{
                onMenuClick: () => console.log("Menu clicked"),
              }}
            />
          </div>

          {/* Property with Many Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Property with Extensive Details
            </h2>
            <PropertyCard
              property={{
                images: [
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
                  "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
                  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                  "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
                ],
                title: "Mansion with All Amenities",
                subtitle:
                  "555 Estate Lane, Luxury District, Beverly Hills, CA 90210",
                description:
                  "An extraordinary estate that redefines luxury living. This magnificent property features every conceivable amenity and represents the pinnacle of architectural excellence and sophisticated design.",
                kpi: 95,
                nextUpText:
                  "Arrange private tour with celebrity real estate agent",
                details: comprehensivePills,
              }}
              actions={{
                onMenuClick: () => console.log("Menu clicked"),
              }}
            />
          </div>

          {/* Custom Styled Property */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Custom Styled Property
            </h2>
            <PropertyCard
              property={{
                images:
                  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                title: "Custom Styled Property",
                subtitle: "321 Style Street, Design District",
                description:
                  "This property card demonstrates custom styling capabilities.",
                kpi: 88,
                nextUpText: "View custom styling options",
                details: comprehensivePills.slice(0, 3),
              }}
              className="border-2 border-blue-500 rounded-xl shadow-lg"
              actions={{
                onMenuClick: () => console.log("Menu clicked"),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
