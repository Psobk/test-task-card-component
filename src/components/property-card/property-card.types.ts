import { type DetailPill } from "./components/pill/pill.types";

export type Property = {
  images: string | string[];
  title: string;
  subtitle?: string;
  description?: string;
  kpi?: number;
  nextUpText?: string;
  details?: DetailPill[];
};

export type PropertyCardActions = {
  onMenuClick?: () => void;
};

export type PropertyCardProps = {
  property: Property;
  actions?: PropertyCardActions;
  className?: string;
};
