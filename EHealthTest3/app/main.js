"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS,
    angular2_jwt_1.AUTH_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
//# sourceMappingURL=main.js.map