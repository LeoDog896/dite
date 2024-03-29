import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { blue } from "../theme.ts";
import { deepmerge } from "../../import/deepmerge.ts";
export default new Command()
  .name("twind")
  .description("Add twind integration to your project")
  .action(async () => {
    const json = JSON.parse(await Deno.readTextFile("deno.json"));

    Deno.writeTextFile(
      "deno.json",
      JSON.stringify(
        deepmerge(json, {
          imports: {
            "twind": "https://esm.sh/twind@1.0.7",
            "twind/": "https://esm.sh/twind@1.0.7?path=///",
          },
        }),
        null,
        2,
      ),
    );

    console.log(
      `Added %ctwind!`,
      blue,
    );
  });
