import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "@supabase/auth-ui-shared";
import "howler";
import { A as About } from "../../chunks/About.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dur = "0:00";
  const args = {
    index: 1,
    imgFile: "https://picsum.photos/48",
    artistName: "Artist Name",
    songTitle: "Song Title",
    datePublished: "XX/XX/XXXX",
    songFile: "https://puvxqpxdhzllboqkucwm.supabase.co/storage/v1/object/public/Music/16356701_I%20Go_(DJ%20Koze%20Remix).mp3?t=2023-07-31T22%3A23%3A28.781Z"
  };
  if ($$props.args === void 0 && $$bindings.args && args !== void 0)
    $$bindings.args(args);
  return `<div class="flex items-center w-full h-full hover:bg-secondary-hover"><button class="w-full flex h-16 max-h-16 items-center text-left"><p class="p-4">${escape(args.index)}</p> <img class="square h-12"${add_attribute("src", args.imgFile, 0)} alt="Album Art"> <div class="flex flex-col pl-2"><p class="font-bold text-lg" data-svelte-h="svelte-6xm4dm">Song Title</p> <p class="font-thin text-main-30 text-sm tracking-wide"><span>${escape(args.artistName)}</span></p></div> <p class="lg:block hidden font-thin text-main-30 text-sm tracking-wide ml-auto w-fit mr-8">${escape(args.datePublished)}</p> <p class="lg:block hidden font-thin text-main-30 text-sm tracking-wide ml-auto w-fit mr-8">${escape(dur)}</p></button> <div class="ml-auto mr-4 lg:hidden w-fit" data-svelte-h="svelte-1xd5dh"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg></div></div>`;
});
const RoundedCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".square.svelte-32ppmg{aspect-ratio:1 / 1}",
  map: null
};
let imgFile = "https://picsum.photos/200";
const RoundedCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex flex-col p-4 w-1/5 bg-secondary-round rounded-lg hover:bg-secondary-hover"><img${add_attribute("src", imgFile, 0)} alt="Art" class="square svelte-32ppmg"> <p class="font-bold" data-svelte-h="svelte-fn1ntc">Title</p> <p class="text-main-30" data-svelte-h="svelte-1uemh5p">Album date</p> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center pl-4" data-svelte-h="svelte-17vg4df"><div class="items-start flex flex-col w-fit"><p class="text-sm lg:hidden font-light tracking-wide opacity-50">Chicago, Illinois</p> <div class="flex lg:hidden justify-start gap-x-1"><a class="" href="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg></a> <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-soundcloud" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z"></path><path d="M9 8l0 9"></path><path d="M6 17l0 -7"></path><path d="M3 16l0 -2"></path></svg></a> <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a></div></div> <div class="mt-4 w-fit ml-auto mr-4 flex items-center gap-x-4"><div class="bg-play p-2 rounded-full text-secondary-highlight"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor"></path></svg></div></div></div> <p class="pl-4 mt-4 text-lg font-bold tracking-wider" data-svelte-h="svelte-1o04kz8">Popular</p> <div>${validate_component(Card, "Card").$$render($$result, {}, {}, {})} ${validate_component(Card, "Card").$$render($$result, {}, {}, {})} ${validate_component(Card, "Card").$$render($$result, {}, {}, {})} ${validate_component(Card, "Card").$$render($$result, {}, {}, {})}</div> <p class="pl-4 mt-4 text-lg font-bold tracking-wider" data-svelte-h="svelte-12y3b80">Discography</p> <div class="flex w-full justify-evenly gap-x-4">${validate_component(RoundedCard, "RoundedCard").$$render($$result, {}, {}, {})} ${validate_component(RoundedCard, "RoundedCard").$$render($$result, {}, {}, {})} ${validate_component(RoundedCard, "RoundedCard").$$render($$result, {}, {}, {})} ${validate_component(RoundedCard, "RoundedCard").$$render($$result, {}, {}, {})}</div> <div class="lg:hidden">${validate_component(About, "About").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
