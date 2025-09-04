import { type PillProps } from "./pill.types";

export function Pill({ pill }: PillProps) {
  const Comp = pill.onClick ? "button" : "div";
  return (
    <Comp
      onClick={pill.onClick}
      className="whitespace-nowrap inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-normal leading-[150%] tracking-normal align-middle text-primary"
    >
      {pill.icon ? (
        <span className="grid place-items-center w-4 h-4 flex-shrink-0">
          {pill.icon}
        </span>
      ) : null}
      <span>{pill.label}</span>
    </Comp>
  );
}
