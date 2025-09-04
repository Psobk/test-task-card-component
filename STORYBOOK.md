# Storybook Documentation

This project includes comprehensive Storybook documentation for all PropertyCard components.

## Getting Started

### Running Storybook

```bash
npm run storybook
```

This will start the Storybook development server on `http://localhost:6006`.

### Building Storybook

```bash
npm run build-storybook
```

This creates a static build of Storybook in the `storybook-static` directory.

## Available Stories

### Main Components

#### PropertyCard

- **Location**: `Components/PropertyCard`
- **Stories**:
  - Default - Complete property card with all features
  - SingleImage - Property with single image
  - Minimal - Property with minimal data
  - WithoutKPI - Property without KPI score
  - WithoutDetails - Property without detail pills
  - ManyDetails - Property with extensive details
  - LongContent - Property with long text content
  - WithoutActions - Property without action handlers
  - CustomStyling - Property with custom CSS classes

#### PropertyHeader

- **Location**: `Components/PropertyHeader`
- **Stories**:
  - Default - Complete header with title, subtitle, and KPI
  - WithoutKPI - Header without KPI score
  - WithoutSubtitle - Header without subtitle
  - Minimal - Header with only title
  - LongTitle - Header with long title text
  - HighKPI - Header with maximum KPI score
  - LowKPI - Header with low KPI score

#### ImageCarousel

- **Location**: `Components/ImageCarousel`
- **Stories**:
  - Default - Carousel with multiple images
  - SingleImage - Carousel with single image
  - TwoImages - Carousel with two images
  - ManyImages - Carousel with many images
  - Mobile - Mobile-optimized carousel
  - CustomHeight - Carousel with custom height
  - NumericHeight - Carousel with numeric height value
  - WithCustomClass - Carousel with custom CSS classes
  - TallImages - Carousel with tall images
  - WideImages - Carousel with wide images

#### Pill

- **Location**: `Components/Pill`
- **Stories**:
  - Default - Standard pill with icon and label
  - WithIcon - Pill with icon
  - WithoutIcon - Pill without icon
  - Clickable - Interactive pill with click handler
  - LongLabel - Pill with long label text
  - ShortLabel - Pill with short label
  - NumericLabel - Pill with numeric label
  - SpecialCharacters - Pill with special characters

#### MenuButton

- **Location**: `Components/MenuButton`
- **Stories**:
  - Default - Standard menu button
  - WithoutHandler - Menu button without click handler
  - WithAlert - Menu button with alert action

#### NextUpSection

- **Location**: `Components/NextUpSection`
- **Stories**:
  - Default - Section with next up text
  - WithoutText - Section without text
  - ShortText - Section with short text
  - LongText - Section with long text
  - SpecialCharacters - Section with special characters
  - NumericText - Section with numeric text

#### PropertyDescription

- **Location**: `Components/PropertyDescription`
- **Stories**:
  - Default - Standard description
  - WithoutDescription - Component without description
  - ShortDescription - Short description
  - LongDescription - Long description with line clamping
  - SingleLine - Single line description
  - WithSpecialCharacters - Description with special characters
  - WithNumbers - Description with numbers

### Overview

#### PropertyCard Showcase

- **Location**: `Overview/PropertyCard Showcase`
- **Stories**:
  - Showcase - Comprehensive display of all PropertyCard variations

## Features

### Interactive Controls

All stories include interactive controls that allow you to:

- Modify component props in real-time
- Test different data scenarios
- Experiment with styling options
- Verify responsive behavior

### Documentation

Each component includes:

- Comprehensive prop documentation
- Usage examples
- Interactive controls
- Visual regression testing capabilities

### Responsive Design

Stories demonstrate how components behave across different screen sizes and orientations.

## Mock Data

The stories use realistic mock data including:

- High-quality property images from Pexels
- Realistic property descriptions
- Various KPI scores and metrics
- Different property types and locations
- Comprehensive detail pills with icons

## Customization

You can easily customize the stories by:

- Modifying the mock data in story files
- Adding new story variations
- Creating custom controls
- Implementing additional interactions

## Best Practices

When working with these stories:

1. Always test edge cases (empty data, long text, etc.)
2. Verify responsive behavior across different screen sizes
3. Test interactive elements and event handlers
4. Ensure accessibility features work correctly
5. Validate that all props are properly documented

## Troubleshooting

If you encounter issues:

1. Ensure all dependencies are installed: `npm install`
2. Check that all required assets (SVG icons) are in the public directory
3. Verify that Tailwind CSS is properly configured
4. Check the browser console for any JavaScript errors
