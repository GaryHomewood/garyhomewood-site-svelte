import { c as create_ssr_component, l as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CircularProgress } from "../../../../chunks/CircularProgress.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let closed = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ak3act_START -->${$$result.title = `<title>${escape(data.sketch?.name)} - Gary Homewood</title>`, ""}<meta name="description" content="${"Sketch " + escape(data.sketch?.name, true)}"><!-- HEAD_svelte-ak3act_END -->`, ""} <div id="sketch-canvas">${validate_component(CircularProgress, "CircularProgress").$$render(
    $$result,
    {
      class: "sketch-loading",
      style: "height: 48px; width: 48px;",
      indeterminate: true,
      closed
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
