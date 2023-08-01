import { f as fail } from "../../../chunks/index.js";
import { writeFileSync } from "fs";
const load = async () => {
  return {};
};
const actions = {
  default: async ({ request, locals }) => {
    const formData = Object.fromEntries(await request.formData());
    if (!formData.song || formData.song === "undefined") {
      console.log(formData.song);
      return fail(400, {
        error: true,
        message: "You must provide a file to upload"
      });
    }
    const { song } = formData;
    console.log(song);
    writeFileSync(`static/media/${song.name}`, Buffer.from(await song.arrayBuffer()));
  }
};
export {
  actions,
  load
};
