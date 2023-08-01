export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CroppedPhoto.jpg","MainPhoto.jpg","favicon.png","favicon.svg","media.json"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.6dac362d.js","app":"_app/immutable/entry/app.13a1fea8.js","imports":["_app/immutable/entry/start.6dac362d.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/singletons.eac03b45.js","_app/immutable/chunks/paths.86485020.js","_app/immutable/entry/app.13a1fea8.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
