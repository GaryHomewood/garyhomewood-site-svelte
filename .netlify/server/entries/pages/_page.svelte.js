import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { C as CircularProgress } from "../../chunks/CircularProgress.js";
import "../../chunks/Subheader.js";
const Card_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sketch-card.svelte-zour07{position:absolute;top:20%;left:calc(50% - 123px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let closed = false;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-133p5nd_START -->${$$result.title = `<title>Gary Homewood</title>`, ""}<meta name="description" content="A portfolio"><!-- HEAD_svelte-133p5nd_END -->`, ""} <section><div id="sketch-canvas">${validate_component(CircularProgress, "CircularProgress").$$render(
    $$result,
    {
      class: "sketch-loading",
      style: "height: 48px; width: 48px;",
      indeterminate: true,
      closed
    },
    {},
    {}
  )}</div> <div class="sketch-card svelte-zour07">${``}</div> </section>`;
});
export {
  Page as default
};
