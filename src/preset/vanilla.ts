/**
 * The vanilla preset is the preset for a simple vanilla-based web application.
 *
 * Files do not have an exported function.
 */

import { Preset } from "./preset.ts";
import { base } from "./base.ts";

const self = base("vanilla");

const vanilla: Preset = ({ barebones } = {}) => ({
  config: {
    ...self.config,
    entry: (fileName) => `import "${fileName}"`,
    extension: ".ts",
  },
  files: [
    ...self.files,
    {
      path: "routes/index.ts",
      content: barebones
        ? `document.getElementById<HTMLDivElement>("app").innerHTML = "<p>Hello World!</p>"`
        : `import { counter } from "$lib/counter.ts";

const app = document.getElementById<HTMLDivElement>("app");
app.innerHTML = \`<p>Hello World!</p>\`;

const counterContainer = document.createElement("div");

counter(counterContainer);

app.appendChild(counterContainer);
`,
    },
    ...(barebones ? [] : [{
      path: "lib/counter.ts",
      content: `export const counter = (container: HTMLDivElement) => {
  let count = 0;
  const p = document.createElement("p");
  p.innerText = "Count: " + count;
  container.appendChild(p);

  const add = document.createElement("button");
  add.innerText = "Add 1";
  add.addEventListener("click", () => {
    count++;
    p.innerText = "Count: " + count;
  });

  const remove = document.createElement("button");
  remove.innerText = "Remove 1";
  remove.addEventListener("click", () => {
    count--;
    p.innerText = "Count: " + count;
  });

  container.appendChild(add);
  container.appendChild(remove);
}`,
    }]),
  ],
  denoConfig: self.denoConfig,
});

export default vanilla;
