import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                      */const _page_about_svelte_svelte_type_style_lang = "";
const css = {
  code: `.text-column.svelte-1iltm8o{line-height:1.6;max-width:464px;margin:40px 16px 0;position:relative}@media(max-width: 480px){.text-column.svelte-1iltm8o{margin-top:16px
  }}ul.svelte-1iltm8o{padding-left:20px}li.svelte-1iltm8o::marker{content:'->';font-family:var(--mdc-typography-font-family)}li.svelte-1iltm8o:before{content:"\\00a0";width:20px}a.svelte-1iltm8o{text-decoration-color:rgba(255, 0, 0, 0.5);text-decoration-style:dashed;text-decoration-thickness:1.5px;text-underline-offset:3px}a.svelte-1iltm8o:link{color:rgba(255, 0, 0, 0.75)}a.svelte-1iltm8o:hover,a.svelte-1iltm8o:visited{color:rgba(255, 0, 0, 1);text-decoration-color:rgba(255, 0, 0, 1)}`,
  map: null
};
const Page_about = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1qtjhn5_START -->${$$result.title = `<title>About - Gary Homewood</title>`, ""}<meta name="description" content="About this portfolio"><!-- HEAD_svelte-1qtjhn5_END -->`, ""} <div class="text-column svelte-1iltm8o" data-svelte-h="svelte-1f5nsfo"><h1>About me</h1> <p>I&#39;m a London based coder/artist, interested in generative art, mostly using <a href="https://p5js.org/" class="svelte-1iltm8o">p5.js</a>. This is a small sample of some sketches.</p> <h2>Contact</h2> <ul class="svelte-1iltm8o"><li class="svelte-1iltm8o"><a href="https://twitter.com/GaryHomewood" class="svelte-1iltm8o">Twitter</a> where I post all my generative art and work in progress.</li> <li class="svelte-1iltm8o"><a href="https://instagram.com/GaryHomewood" class="svelte-1iltm8o">Instagram</a> mostly street photography and abstract, often black and white with too much contrast.</li> <li class="svelte-1iltm8o"><a href="https://www.goodreads.com/review/list/1330893" class="svelte-1iltm8o">Goodreads</a> every work of fiction I&#39;ve ever read, rated, with a pithy review.</li> <li class="svelte-1iltm8o"><a href="https://github.com/GaryHomewood" class="svelte-1iltm8o">Github</a> for all the hacked together code learning.</li> <li class="svelte-1iltm8o"><a href="https://www.linkedin.com/in/garyhomewooduk/" class="svelte-1iltm8o">LinkedIn</a> where I try to maintain a semblance of professionalism.</li></ul> <h2>Colophon</h2> <p>Built with</p> <ul class="svelte-1iltm8o"><li class="svelte-1iltm8o"><a href="https://svelte.dev/" class="svelte-1iltm8o">Svelte</a></li> <li class="svelte-1iltm8o"><a href="https://sveltematerialui.com/" class="svelte-1iltm8o">Svelte Material UI</a></li> <li class="svelte-1iltm8o"><a href="https://p5js.org/" class="svelte-1iltm8o">p5.js</a></li></ul> </div>`;
});
export {
  Page_about as default
};
