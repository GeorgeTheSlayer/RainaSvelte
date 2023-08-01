import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.9fae59b8.js","_app/immutable/chunks/About.2fb26c3b.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/singletons.5fb1f62d.js"];
export const stylesheets = ["_app/immutable/assets/0.45d0daf0.css"];
export const fonts = [];
