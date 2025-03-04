import { hyperFactory } from "@/factories";
import htm from "htm";

export type Template = ReturnType<typeof html>;

export const html = htm.bind(hyperFactory);
