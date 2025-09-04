import { type ReactNode } from "react";

export type DetailPill = {
  id: string | number;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};

export interface PillProps {
  pill: DetailPill;
}
