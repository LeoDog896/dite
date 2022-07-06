import { Preset } from "./preset.ts";
import { base } from "./base.ts";

const self = base("preact");

const preact: Preset = () => ({
  config: {
    ...self.config,
    entry: (fileName) => `import "${fileName}"`,
    extension: ".tsx",
  },
  files: [
    ...self.files,
  ],
  importMap: {
    ...self.importMap,
    "preact": "https://esm.sh/preact@10.8.2",
    "preact/": "https://esm.sh/preact@10.8.2/",
  },
});

export default preact;
