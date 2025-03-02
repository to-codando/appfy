import htm from "htm";
import { hyperFactory } from "@/factories";

export type Template = ReturnType<typeof html>;

export const html = htm.bind(hyperFactory);
