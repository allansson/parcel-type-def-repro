import { printEstree } from "prettier-src/src/language-js/print/estree";

export function test() {
  return printEstree("", {}, () => {}, {});
}
