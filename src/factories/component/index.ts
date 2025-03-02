import type { Template, HMap } from "@/factories";

export type ComponentProps<T = unknown> = {
  [key: string]: T;
} & {
  [key: symbol]: T;
};

export type ComponentOptions<T = unknown> = {
  props: ComponentProps<T>;
  target: HTMLElement;
};

export type ComponentFactory = <T = unknown>(options: ComponentOptions<T>) => Template;

export const createComponent = (factory: ComponentFactory, options: ComponentOptions) => {
  let _tagName!: string;
  let _element!: HTMLElement;
  let _template = "";
  const _target = options.target;
  const _props = options.props;
  const _map = factory(options);

  const _createElement = (tagName: string): HTMLElement => {
    return document.createElement(tagName);
  };

  const _createTagName = (factoryName: string): string => {
    return factoryName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  };

  const _createTemplateByObject = (template: HMap): string => {
    return "";
  };

  const _createTemplateByArray = (template: HMap[]): string => {
    return "";
  };

  const _createTemplate = (templateMap: Template): string => {
    if (Array.isArray(templateMap)) return _createTemplateByArray(templateMap);
    return _createTemplateByObject(templateMap);
  };

  const render = (target = options.target) => {
    _tagName = _createTagName(factory.name);
    _element = _createElement(_tagName);
    _template = _createTemplate(_map);
  };

  return {
    render,
  };
};
