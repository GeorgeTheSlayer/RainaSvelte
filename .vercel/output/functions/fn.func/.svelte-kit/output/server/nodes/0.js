

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.514acd82.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js","_app/immutable/chunks/paths.86485020.js","_app/immutable/chunks/About.59fabb45.js"];
export const stylesheets = ["_app/immutable/assets/0.6b05bd23.css"];
export const fonts = [];
