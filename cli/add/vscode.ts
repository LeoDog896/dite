import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { createFile } from "../../util/createFile.ts";
import { blue, white } from "../theme.ts";

const files = [
  {
    path: ".vscode/settings.json",
    content: JSON.stringify(
      {
        "deno.enable": true,
        "deno.unstable": true,
        "deno.importMap": "import_map.json",
      },
      null,
      2,
    ),
  },
  {
    path: ".vscode/extensions.json",
    content: JSON.stringify(
      {
        "recommendations": [
          "denoland.vscode-deno",
        ],
      },
      null,
      2,
    ),
  },
];

export default new Command()
  .name("vscode")
  .description("Add vscode integration to your project")
  .action(() => {
    files.forEach((file) => createFile(file));
    console.log(
      `Added %cvscode! %cMake sure to add the reccomended Deno extension if necessary."`,
      blue,
      white,
    );
  });
