import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                      */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-znauo7{box-sizing:border-box;display:flex;flex-direction:column;flex:1;font-family:var(--mdc-typography-font-family);justify-content:start;margin:0 auto;max-width:64rem;min-height:100dvh;padding:1rem;width:100%}@media(max-width: 480px){main.svelte-znauo7{background:white !important}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="main-content svelte-znauo7">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
