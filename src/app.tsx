import { PropertyCard, type DetailPill } from "./components/property-card";

const pills: DetailPill[] = [
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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <PropertyCard
            property={{
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
              details: pills,
            }}
            actions={{
              onMenuClick: () => console.log("Menu clicked"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
