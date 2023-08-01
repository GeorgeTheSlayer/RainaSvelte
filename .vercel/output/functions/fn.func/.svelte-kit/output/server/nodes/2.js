import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.2ee9d57e.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js","_app/immutable/chunks/About.2fb26c3b.js"];
export const stylesheets = ["_app/immutable/assets/2.505c7612.css"];
export const fonts = [];
