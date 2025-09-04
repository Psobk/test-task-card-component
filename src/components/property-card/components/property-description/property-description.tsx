import { type PropertyDescriptionProps } from "./property-description.types";

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  if (!description) return null;

  return (
    <div className="text-xs font-normal leading-[150%] tracking-normal align-middle text-secondary">
      <div className="line-clamp-2">{description}</div>
    </div>
  );
}
