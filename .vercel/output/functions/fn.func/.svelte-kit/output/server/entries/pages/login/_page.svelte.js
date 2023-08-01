import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "@supabase/auth-ui-shared";
const Button_svelte_svelte_type_style_lang = "";
const EmailAuth_svelte_svelte_type_style_lang = "";
const ForgottenPassword_svelte_svelte_type_style_lang = "";
const MagicLink_svelte_svelte_type_style_lang = "";
const Icons_svelte_svelte_type_style_lang = "";
const UpdatePassword_svelte_svelte_type_style_lang = "";
const VerifyOtp_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  ${$$result.head += `<!-- HEAD_svelte-1hgwsyy_START -->${$$result.title = `<title>User Management</title>`, ""}<!-- HEAD_svelte-1hgwsyy_END -->`, ""} <div class="row flex-center flex" data-svelte-h="svelte-14pfv3d"><div class="col-6 form-widget"></div></div>`;
});
export {
  Page as default
};
