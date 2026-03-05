export const enum MaterialType {
  /**
   * 单体
   */
  Monomer = 1,
  /**
   * 溶剂
   */
  Solvent = 2,
  /**
   * 引发剂
   */
  Initiator = 3,
  /**
   * 助剂
   */
  Auxiliary = 4,
  /**
   * 树脂
   */
  Resin = 5,
}

interface MaterialTypeItem {
  key: MaterialType;
  name: string;
}

export const materialTypeList: MaterialTypeItem[] = [
  {
    key: MaterialType.Monomer,
    name: "单体",
  },
  {
    key: MaterialType.Solvent,
    name: "溶剂",
  },
  {
    key: MaterialType.Initiator,
    name: "引发剂",
  },
  {
    key: MaterialType.Auxiliary,
    name: "助剂",
  },
  {
    key: MaterialType.Resin,
    name: "树脂",
  },
];

export const enum SystemStatus {
  Running = 1, //运行中
  Paused = 0, //暂停中
}

interface SystemStatusItem {
  key: SystemStatus;
  name: string;
}
export const systemStatusList: SystemStatusItem[] = [
  {
    key: SystemStatus.Running,
    name: "运行中",
  },
  {
    key: SystemStatus.Paused,
    name: "暂停中",
  },
];

/**
 * @description localStorage中物料列表的key
 */
export const LOCAL_MATERIAL_LIST_KEY: string = "localMaterialList";

export const IMPORT_EXPORT_JSON_CONTENT_KEY = "lxx_json_unique_key";

/**
 * 工艺类型
 */
export const enum ProcessType {
  /**
   * 通用型
   */
  UNIVERSAL = 1,
  /**
   * 回流型
   */
  BACKFLOW = 2,
  /**
   * 控温型
   */
  TEMPERATURE_CONTROL = 3,
}

export const processTypeList = [
  {
    key: ProcessType.UNIVERSAL,
    name: "通用型",
  },
  {
    key: ProcessType.BACKFLOW,
    name: "回流型",
  },
  {
    key: ProcessType.TEMPERATURE_CONTROL,
    name: "控温型",
  },
];

export const enum DefaultProcessResultsType {
  INITIAL = "initial",
  FIRST = "first",
  LAST = "last",
}

export const DefaultProcessResults = [
  {
    key: DefaultProcessResultsType.INITIAL,
    time: "-1:00",
    value: "室温",
  },
  {
    key: DefaultProcessResultsType.FIRST,
    time: "0:00",
    value: "0",
  },
  {
    key: DefaultProcessResultsType.LAST,
    time: "1:00后",
    value: "20",
  },
];
