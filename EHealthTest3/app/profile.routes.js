"use strict";
var profile_show_component_1 = require('./profile_show.component');
var profile_component_1 = require('./profile.component');
exports.ProfileRoutes = [
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        children: [
            { path: '', component: profile_show_component_1.ProfileShow }
        ]
    }
];
//# sourceMappingURL=profile.routes.js.map