"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var profile_routes_1 = require('./profile.routes');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent }
].concat(profile_routes_1.ProfileRoutes, [
    { path: '**', redirectTo: '' }
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map