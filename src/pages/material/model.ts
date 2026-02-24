import { MaterialType } from "~@/config/global";

export interface IMaterialItem {
  uuid: string;
  code: string;
  shortName: string;
  fullName: string;
  category: MaterialType | undefined;
  tg: number | undefined;
  acidValue: string;
  glyoxylateValue: string;
}
