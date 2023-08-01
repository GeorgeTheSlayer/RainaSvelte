import { c as create_ssr_component } from "./ssr.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-secondary-round rounded-lg mt-6 pt-2" data-svelte-h="svelte-10jlfgk"><p class="pl-4 text-lg font-bold tracking-wider">About Me</p> <a href="/" class="px-8 mt-4 flex w-full justify-start items-center"><img class="rounded-full" src="/CroppedPhoto.jpg" alt="" width="75" height="75"> <div class="w-full ml-4"><h1 class="text-sm font-bold">Raina Villareal</h1> <p class="text-xs opacity-50">Producer / Songwriter / Audio Engineer</p></div> <div><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg></div></a></div>`;
});
export {
  About as A
};
