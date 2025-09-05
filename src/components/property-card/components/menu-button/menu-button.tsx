import { type MenuButtonProps } from "./menu-button.types";

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 bg-white border border-[#EEEEEE] hover:border-[#EEEEEE] hover:shadow-[0px_1px_2px_0px_#0000000D] active:bg-[#FAFAFA] active:border-[#EEEEEE] active:shadow-[0px_1px_2px_0px_#0000000D] rounded-lg menu-button"
      aria-label="Open menu"
    >
      <img src="/dots-horizontal.svg" alt="Menu" width="14" height="14" />
    </button>
  );
}
