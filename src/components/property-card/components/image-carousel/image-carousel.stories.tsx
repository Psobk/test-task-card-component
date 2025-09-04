import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageCarousel } from "./image-carousel";

const meta: Meta<typeof ImageCarousel> = {
  title: "Components/ImageCarousel",
  component: ImageCarousel,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "An image carousel component that displays multiple images with navigation controls and dots indicator.",
      },
    },
  },
  argTypes: {
    images: {
      description: "Single image URL or array of image URLs",
      control: "object",
    },
    className: {
      description: "Additional CSS classes to apply",
      control: "text",
    },
    height: {
      description: "Height of the carousel (CSS value or number)",
      control: "text",
    },
    isMobile: {
      description: "Whether the carousel is displayed on mobile",
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

const mockImages = [
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
  "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
];

export const Default: Story = {
  args: {
    images: mockImages,
    height: "200px",
  },
};

export const SingleImage: Story = {
  args: {
    images: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    height: "200px",
  },
};

export const TwoImages: Story = {
  args: {
    images: mockImages.slice(0, 2),
    height: "200px",
  },
};

export const ManyImages: Story = {
  args: {
    images: [
      ...mockImages,
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    ],
    height: "200px",
  },
};

export const Mobile: Story = {
  args: {
    images: mockImages,
    height: "256px",
    isMobile: true,
  },
};

export const CustomHeight: Story = {
  args: {
    images: mockImages,
    height: "300px",
  },
};

export const NumericHeight: Story = {
  args: {
    images: mockImages,
    height: 150,
  },
};

export const WithCustomClass: Story = {
  args: {
    images: mockImages,
    height: "200px",
    className: "border-2 border-blue-500 rounded-lg",
  },
};

export const TallImages: Story = {
  args: {
    images: [
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    ],
    height: "400px",
  },
};

export const WideImages: Story = {
  args: {
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    ],
    height: "150px",
  },
};
