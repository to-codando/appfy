import type { ComponentFactory, ComponentOptions } from "@/factories";
import { createComponent } from "@/factories";

type RenderOptions<T = unknown> = {
  target: HTMLElement;
  props: ComponentOptions<T>;
};

type Render<T = unknown> = (component: ComponentFactory, options: RenderOptions<T>) => void;

const _target = document.body;
const _props = {};
const _options = { target: _target, props: _props };

export const render: Render = (factory, options = _options) => {
  const component = createComponent(factory, options);
  console.log("running...");
};
