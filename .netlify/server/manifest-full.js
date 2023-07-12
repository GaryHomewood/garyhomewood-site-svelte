export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","img/flow-field-thumb.png","img/frieder-nake-thumb.png","img/quad-packing-thumb.png","img/spiked-grid-thumb.png","js/hammer.min.js","js/p5.grain.core.js","js/p5.grain.min.js","js/p5.min.js","robots.txt","sketches/flow-field.js","sketches/frieder-nake.js","sketches/home-sketch.js","sketches/quad-packing.js","sketches/spiked-grid.js","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".js":"application/javascript",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.419c93c5.js","app":"_app/immutable/entry/app.993b5a28.js","imports":["_app/immutable/entry/start.419c93c5.js","_app/immutable/chunks/scheduler.b511adf7.js","_app/immutable/chunks/singletons.da46de22.js","_app/immutable/entry/app.993b5a28.js","_app/immutable/chunks/scheduler.b511adf7.js","_app/immutable/chunks/index.97a78a3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sketch/[slug]",
				pattern: /^\/sketch\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
