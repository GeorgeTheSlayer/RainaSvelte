import * as server from '../entries/pages/admin/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.80b95504.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js"];
export const stylesheets = [];
export const fonts = [];
