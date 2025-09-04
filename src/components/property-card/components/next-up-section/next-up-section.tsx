import { type NextUpSectionProps } from "./next-up-section.types";

export function NextUpSection({ nextUpText }: NextUpSectionProps) {
  if (!nextUpText) return null;

  return (
    <div className="text-sm">
      <p className="font-medium leading-[150%] tracking-normal text-right align-middle text-primary">
        Next Up
      </p>
      <div className="text-xs font-normal leading-[150%] tracking-normal align-middle text-right text-secondary">
        {nextUpText}
      </div>
    </div>
  );
}
