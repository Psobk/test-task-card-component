import { type PropertyHeaderProps } from "./property-header.types";

export function PropertyHeader({ title, subtitle, kpi }: PropertyHeaderProps) {
  return (
    <div>
      <h3
        className={
          "text-sm font-medium flex items-center gap-1 leading-[150%] tracking-normal align-middle text-primary"
        }
      >
        {title}
        <img
          src="/key.svg"
          alt="Key"
          width="12"
          height="12"
          className="text-primary"
        />
        {kpi && <span>{kpi}%</span>}
      </h3>
      {subtitle && (
        <p
          className={
            "mt-0.5 text-xs font-normal leading-[150%] tracking-normal align-middle text-secondary"
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
