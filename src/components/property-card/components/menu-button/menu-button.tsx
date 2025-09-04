import { type MenuButtonProps } from "./menu-button.types";

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg menu-button"
      aria-label="Open menu"
    >
      <img src="/dots-horizontal.svg" alt="Menu" width="14" height="14" />
    </button>
  );
}
