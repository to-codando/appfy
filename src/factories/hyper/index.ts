export type HType = string | ((props: Record<string, unknown>) => unknown);

export type HProps = Record<string, unknown> | null;

export type HChildren = unknown[];

export type HMap = {
  type: HType;
  props: HProps;
  children: HChildren;
};

export type HyperMap = (type: HType, props: HProps, children: HChildren) => HMap;

export const hyperFactory = function h(type, props, children) {
  return { type, props: props || null, children };
} as HyperMap;
