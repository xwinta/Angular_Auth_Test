"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_jwt_1 = require('angular2-jwt');
var PouchDB = require("pouchdb");
var Auth = (function () {
    function Auth() {
        var _this = this;
        // Configure my Auth0
        this.lock = new Auth0Lock('PWOKS8JxmOpSpvLGBWY39ZmCYNXJvxZU', 'xwinta.auth0.com', {
            additionalSignUpFields: [{
                    name: "address",
                    placeholder: "enter your address",
                    validator: function (value) {
                        return value.length > 10;
                    }
                }]
        });
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        var db = new PouchDB('healthProfile');
        var newDoc = {
            '_id': 'profile',
            'value': this.userProfile
        };
        db.put(newDoc);
        db.info().then(console.log.bind(console));
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    alert(error);
                    return;
                }
                profile.user_metadata = profile.user_metadata || {};
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
            });
        });
    }
    Auth.prototype.initDB = function () {
        this._db = new PouchDB('healthProfile', { adapter: 'websql' });
    };
    ;
    Auth.prototype.login = function () {
        this.lock.show();
    };
    ;
    Auth.prototype.authenticated = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    Auth.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };
    ;
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map