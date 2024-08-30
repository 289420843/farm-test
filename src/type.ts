import { ComputedRef, InjectionKey, Ref } from "vue";
// 表单api
export const sourceBindKey = Symbol("sourceBindKey") as InjectionKey<{
  setOptions: Ref<SelectOption[]>;
  getSourceOptions(dataSet: string): Promise<SelectOption[]>;
}>;
// 表单Id
export const formIdKey = Symbol("formIdKey") as InjectionKey<string>;

// 节点分组
export const nodeGroupKey = Symbol("nodeGroupKey") as InjectionKey<
  ComputedRef<NodeGroup>
>;
// 节点集合 平级
export const nodeMapKey = Symbol("nodeMapKey") as InjectionKey<Ref<NodeMap>>;
export interface FormOption {
  list: Node[];
  setting: FormSetting;
}
export interface FormSetting {
  label: {
    width: number;
    position: LabelPosition;
  };
  errorHeight?: number;
}
// 表单节点类型
export enum NodeType {
  input = "df-input",
  inputNumber = "df-input-number",
  select = "df-select",
  radio = "df-radio",
  checkbox = "df-checkbox",
  datePicker = "df-date-picker",
  search = "df-search",
  upload = "df-upload",
  fishBone = "df-fish-bone",
  layoutRow = "df-layout-row",
  layoutCol = "df-layout-col",
  group = "df-group",
  formItem = "df-form-item",
  label = "df-label",
  space = "df-space",
  scorePain = "df-score-pain",
}
export interface Node<Props = Record<string, any>> {
  // 节点id
  id: string;
  // 节点类型
  type: NodeType;
  // 字段
  field?: string;
  // 数据源
  source?: string;
  // 标签
  label?: string;
  // 标签宽度
  labelWidth?: number;
  // 隐藏标签
  hiddenLabel?: boolean;
  // 节点参数
  props: Props;
  // 子节点
  children?: Node[];
  // 结构化数据 默认取 value属性，从上下文对象取值属性
  // 比如checkbox组件，上下文中存储的数据是 [{label:xxx,value:1},{label:xxx,value:2}]  从对象的value取值，结果为 [1,2],如果数据结构不是value，需要配置成正确的属性)
  structValue?: string | StructValueFunction;
  // 组件赋值操作
  setValue?: (value: any) => void;
  logic?: LogicSetting;
}
export type StructValueFunction = () => string | string[];
export interface ElementItem {
  // 标签
  label?: string;
  // 图标
  icon?: string;
  // 节点类型
  type: NodeType;
  // 默认参数
  defaultProps?: Record<string, any>;
}
export interface DesignerRef {
  // 获取表单配置项
  getOption(): FormOption;
  // 预览
  preview(): void;
  // 清空表单
  clearForm(): void;
}
export interface StructItem {
  // 字段id
  id?: string;
  // 标签名称
  name?: string;
  // 值
  value?: string;
  // 冗余名称
  label?: string;
  // 冗余扩展text值
  text?: string;
  // 字典code
  dictCode?: string;
  // 组件类型
  type?: string;
}

export enum LabelPosition {
  left = "left",
  right = "right",
  top = "top",
}

export interface DictOption extends SelectOption {
  // 是否是其他选项
  isOther?: boolean;
}

export interface SelectOption {
  // 显示的文字
  label: string;
  // 实际值
  value: string;
}

// 数据来源方式
// @enumString("DynamicDataSourceType")
export enum DataSourceType {
  // @enumString("静态数据源")
  static = "static",
  // @enumString("系统字典")
  dict = "dict",
  // @enumString("外部接口获取")
  request = "request",
}
// 数据来源配置项
export interface DataSourceOption {
  static?: DictOption[]; // label - value
  dict?: { code: string; name: string };
  request?: RequestOption;
}

// 来自外部接口配置项
export interface RequestOption {
  url?: string;
  searchKey?: string;
  method?: MethodType;
  // body参数
  data?: Record<string, any>;
  // query参数
  params?: Record<string, any>;
  header?: Record<string, any>;
  resFunc?: string;
  cascadeId?: string;
  cascadeKey?: string;
  // cascadeKey 必须有效 为空时不请求数据
  cascadeKeyValid?: boolean;
  cascadeKeyInData?: boolean;
}
export enum MethodType {
  GET = "GET",
  POST = "POST",
}

export enum CodeType {
  JSON = "JSON",
  FUNC = "FUNC",
}

export enum DirectionType {
  // @enumString("横向排列")
  row = "row", // 横
  // @enumString("纵向排列")
  column = "column", // 纵
}
type NodeId = string;
type NodeLabel = string;
export type NodeGroupItem = {
  id: NodeId;
  label: NodeLabel;
};
export type NodeGroup = Record<string, Record<NodeId, NodeGroupItem>>;
export type NodeMap = Record<NodeId, Node>;
export type NodeField = string;

export enum InitStatus {
  // 未开始
  none,
  // 正在请求
  doing,
  // 请求完成
  done,
}
type DictKey = string;
export type DictDataSourceManage = {
  init: InitStatus;
  initCallback: Array<() => void>;
  data: Record<
    DictKey,
    {
      code: string;
      list?: Array<DictOption>;
      callback: Array<() => void>;
    }
  >;
};
export interface FillOption {
  dataKey: string;
  fillNodeId: string;
}
export interface ToolItem {
  title: string;
  icon?: string;
  click?: () => void;
}

// 依赖源
export interface DependentSource {
  // 字段名称
  nodeId: string;
  // 变量名
  variableName: string;
}

// 逻辑配置
export interface LogicSetting {
  source: DependentSource[];
  rules: LogicRule[];
}
export interface LogicRule {
  propName: LogicPropName;
  script: string;
}
// 逻辑属性名称
export enum LogicPropName {
  value = "value",
  structValue = "structValue",
  label = "label",
  hiddenLabel = "hiddenLabel",
  readOnly = "readOnly",
  hidden = "hidden",
  props = "props",
  required = "required",
}
export enum ValueType {
  string = 1,
  stringArr,
  number,
  boolean,
  undefined,
  componentValue,
  componentProps,
  select,
  radio,
  upload,
  checkbox,
  fishBone,
  scorePain,
  formItem,
}
export type FormNodeSetValueFunction = (value: any) => void;
