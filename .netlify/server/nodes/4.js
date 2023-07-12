import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/about/_page@about.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/4.f58b4fac.js","_app/immutable/chunks/scheduler.b511adf7.js","_app/immutable/chunks/index.97a78a3d.js"];
export const stylesheets = ["_app/immutable/assets/4.f6194621.css","_app/immutable/assets/styles.f503adc4.css"];
export const fonts = [];
