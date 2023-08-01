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
		client: {"start":"_app/immutable/entry/start.8ddf0ed2.js","app":"_app/immutable/entry/app.cbaecf37.js","imports":["_app/immutable/entry/start.8ddf0ed2.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/singletons.5fb1f62d.js","_app/immutable/entry/app.cbaecf37.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.22d646ea.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/callback/_server.ts.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
