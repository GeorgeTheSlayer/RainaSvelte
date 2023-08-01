

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e52b4e11.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js","_app/immutable/chunks/singletons.5fb1f62d.js"];
export const stylesheets = [];
export const fonts = [];
