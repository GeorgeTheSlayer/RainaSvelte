import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.a4017147.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js"];
export const stylesheets = ["_app/immutable/assets/4.0a15a45c.css"];
export const fonts = [];
