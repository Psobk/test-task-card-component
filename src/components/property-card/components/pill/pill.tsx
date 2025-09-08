import { type PillProps } from "./pill.types";

export function Pill({ pill }: PillProps) {
  const Comp = pill.onClick ? "button" : "div";
  return (
    <Comp
      onClick={pill.onClick}
      className="whitespace-nowrap inline-flex items-center gap-1 rounded-full border border-[#EEEEEE] bg-white px-2 py-1 text-xs font-normal leading-[150%] tracking-normal align-middle text-primary hover:border-[#EEEEEE] hover:shadow-[0px_1px_2px_0px_#0000000D] active:bg-[#FAFAFA] active:border-[#EEEEEE] active:shadow-[0px_1px_2px_0px_#0000000D] select-none flex-shrink-0"
    >
      {pill.icon ? (
        <span className="grid place-items-center w-4 h-4 flex-shrink-0 pointer-events-none">
          {pill.icon}
        </span>
      ) : null}
      <span className="pointer-events-none">{pill.label}</span>
    </Comp>
  );
}
