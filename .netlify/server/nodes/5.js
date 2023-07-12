import * as server from '../entries/pages/sketch/_slug_/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/sketch/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sketch/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.4f507bee.js","_app/immutable/chunks/scheduler.b511adf7.js","_app/immutable/chunks/index.97a78a3d.js","_app/immutable/chunks/CircularProgress.58e0e94c.js","_app/immutable/chunks/useActions.a05dff50.js"];
export const stylesheets = [];
export const fonts = [];
