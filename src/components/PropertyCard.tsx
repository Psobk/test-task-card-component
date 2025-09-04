// PropertyCard.tsx
import { type ReactNode } from "react";

type KPIStatus = "success" | "warning" | "danger" | "info" | "neutral";

type KPIBadge = {
  value: string;          // e.g. "95%"
  status?: KPIStatus;     // color variant
  label?: string;         // optional textual label (for a11y or tooltip)
};

export type DetailPill = {
  id: string | number;
  label: string;
  icon?: ReactNode;       // pass any icon (SVG/emoji) from your app
  onClick?: () => void;
};

export type PropertyCardProps = {
  imageUrl: string;
  title: string;
  subtitle?: string;      // e.g. address/region
  description?: string;
  kpi?: KPIBadge;
  nextUpText?: string;    // top-right small caption on desktop
  details?: DetailPill[]; // pills, horizontally scrollable
  className?: string;

  // Optional render slots to let you replace parts if needed
  renderMenuButton?: () => ReactNode; // kebab/menu
  renderSliderArrows?: () => ReactNode; // if you mount inside a slider
  actionsRight?: ReactNode; // custom right-side action area (desktop)
};

const statusToClasses: Record<KPIStatus, string> = {
  success:
    "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  warning:
    "bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-200",
  danger:
    "bg-rose-100 text-rose-700 ring-1 ring-inset ring-rose-200",
  info:
    "bg-sky-100 text-sky-700 ring-1 ring-inset ring-sky-200",
  neutral:
    "bg-gray-100 text-gray-700 ring-1 ring-inset ring-gray-200",
};

function KPIBadgeView({ value, status = "neutral", label }: KPIBadge) {
  return (
    <span
      className={`inline-flex min-w-[3rem] items-center justify-center rounded-full px-2 py-1 text-xs font-medium ${statusToClasses[status]}`}
      aria-label={label ?? value}
      title={label ?? value}
    >
      {value}
    </span>
  );
}

function Pill({ pill }: { pill: DetailPill }) {
  const Comp = pill.onClick ? "button" : "div";
  return (
    <Comp
      onClick={pill.onClick}
      className="whitespace-nowrap inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
    >
      {pill.icon ? <span className="grid place-items-center">{pill.icon}</span> : null}
      <span>{pill.label}</span>
    </Comp>
  );
}

export function PropertyCard({
  imageUrl,
  title,
  subtitle,
  description,
  kpi,
  nextUpText,
  details = [],
  className = "",
  renderMenuButton,
  renderSliderArrows,
  actionsRight,
}: PropertyCardProps) {
  return (
    <article
      className={`relative overflow-hidden bg-white shadow-sm p-6 ${className}`}
    >
      {/* Desktop / tablet layout */}
      <div className="hidden md:grid md:grid-cols-[240px_1fr] gap-6">
        {/* Image */}
        <div className="relative">
          <img
            src={imageUrl}
            alt=""
            className="h-40 w-full rounded-xl object-cover"
          />
          {renderSliderArrows ? (
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between p-2">
              <div className="pointer-events-auto">{renderSliderArrows()}</div>
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {title}
                </h3>
                {subtitle ? (
                  <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>
                ) : null}
              </div>
              {kpi ? <KPIBadgeView {...kpi} /> : null}
            </div>

            <div className="flex items-center gap-3">
              {nextUpText ? (
                <div className="hidden md:block text-xs text-gray-500">
                  <p className="font-medium text-gray-700">Next Up</p>
                  <div>{nextUpText}</div>
                </div>
              ) : null}
              {actionsRight}
              {renderMenuButton ? renderMenuButton() : (
                <button
                  className="grid h-8 w-8 py-4 px-2 place-items-center bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
                  aria-label="Open menu"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Detail pills (horizontal scroll) */}
          {details.length > 0 && (
            <div className="-mx-1 overflow-x-auto pb-1">
              <div className="mx-1 flex gap-2">
                {details.map((d) => (
                  <Pill key={d.id} pill={d} />
                ))}
              </div>
            </div>
          )}

          {description ? (
            <p className="text-sm leading-5 text-gray-600 line-clamp-3">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="relative">
          <img src={imageUrl} alt="" className="h-64 w-full object-cover" />
          {/* floating KPI bubble on mobile (matches mock vibe) */}
          {kpi ? (
            <div className="absolute -bottom-5 right-4 rounded-full bg-white p-2 shadow-lg ring-1 ring-gray-200">
              <KPIBadgeView {...kpi} />
            </div>
          ) : null}
        </div>

        <div className="mt-6 rounded-t-2xl bg-white p-4">
          <div className="mb-2 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {title}
              </h3>
              {subtitle ? (
                <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
              ) : null}
            </div>

            {renderMenuButton ? renderMenuButton() : (
              <button
                className="grid h-8 w-8 place-items-center rounded-full bg-white shadow ring-1 ring-gray-200"
                aria-label="Open menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="19" cy="12" r="2" />
                </svg>
              </button>
            )}
          </div>

          {/* Pills */}
          {details.length > 0 && (
            <div className="-mx-1 overflow-x-auto pb-1">
              <div className="mx-1 flex gap-2">
                {details.map((d) => (
                  <Pill key={d.id} pill={d} />
                ))}
              </div>
            </div>
          )}

          {description ? (
            <p className="mt-3 text-sm leading-5 text-gray-600">
              {description}
            </p>
          ) : null}

          {nextUpText ? (
            <div className="mt-3 text-xs text-gray-500">
              <span className="font-medium text-gray-700">Next Up: </span>
              {nextUpText}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
