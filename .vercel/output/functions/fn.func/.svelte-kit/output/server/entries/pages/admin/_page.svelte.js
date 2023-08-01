import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1jufa8v">Upload Stuff Here</h1> <form method="POST" class="w-full" enctype="multipart/form-data"><input type="file" id="song" name="song" accept=".mp3"> <input type="file" id="albumArt" name="albumArt" accept=".jpg,.jpeg,.png"> <input type="text" id="title" name="title"> <input type="text" id="artist" name="artist"> <input type="text" id="date" name="date"> <button type="submit" data-svelte-h="svelte-1ou7dtz">Submit</button></form>`;
});
export {
  Page as default
};
