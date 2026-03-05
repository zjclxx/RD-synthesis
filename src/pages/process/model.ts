import { ProcessType } from "@/config/global";

/**
 * 工艺时间结果类型 range:区间类型，single:单值类型
 */
export type ProcessResultType = "range" | "single";

export interface IProcessResult {
  id: string;
  time: string;
  type: ProcessResultType;
  value: ProcessResultType extends "range" ? [number, number] : number;
}

/**
 * 工艺列表item
 */
export interface IProcessItem {
  id: string;
  name: string;
  remark: string;
  type: ProcessType;
  results: IProcessResult[];
}
