import { ImageCarousel } from "./components/image-carousel";
import { PropertyHeader } from "./components/property-header";
import { PropertyDescription } from "./components/property-description";
import { MenuButton } from "./components/menu-button";
import { NextUpSection } from "./components/next-up-section";
import { Pill } from "./components/pill";
import { type PropertyCardProps } from "./property-card.types";

export function PropertyCard({
  property,
  actions = {},
  className = "",
}: PropertyCardProps) {
  const {
    images,
    title,
    subtitle,
    description,
    kpi,
    nextUpText,
    details = [],
  } = property;

  const { onMenuClick } = actions;
  return (
    <article
      className={`relative overflow-hidden bg-white shadow-sm ${className}`}
    >
      <div className="hidden md:block p-6">
        <div className="grid grid-cols-[224px_1fr] gap-6">
          <ImageCarousel images={images} />

          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <PropertyHeader title={title} subtitle={subtitle} kpi={kpi} />
              </div>

              <div className="flex items-center gap-3 h-full">
                <NextUpSection nextUpText={nextUpText} />
                <MenuButton onClick={onMenuClick} />
              </div>
            </div>

            {details.length > 0 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
                {details.map((d) => (
                  <Pill key={d.id} pill={d} />
                ))}
              </div>
            )}

            <PropertyDescription description={description} />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <ImageCarousel images={images} height="256px" isMobile />

        <div className="p-6 bg-white rounded-t-2xl -mt-4 relative z-10">
          <div className="mb-2 flex items-start justify-between gap-2">
            <PropertyHeader title={title} subtitle={subtitle} kpi={kpi} />
            <MenuButton onClick={onMenuClick} />
          </div>

          {details.length > 0 && (
            <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide -mx-6 px-6 py-1">
              {details.map((d) => (
                <Pill key={d.id} pill={d} />
              ))}
            </div>
          )}

          <PropertyDescription description={description} />
        </div>
      </div>
    </article>
  );
}
