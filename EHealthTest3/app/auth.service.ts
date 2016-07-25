import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';


declare var Auth0Lock: any;
declare function require(a)

var PouchDB = require("pouchdb")

@Injectable()
export class Auth {
  // Configure my Auth0
  lock = new Auth0Lock('PWOKS8JxmOpSpvLGBWY39ZmCYNXJvxZU', 'xwinta.auth0.com', {
        additionalSignUpFields: [{
      name: "address",                              
      placeholder: "enter your address",            
      
      validator: function(value) {
        
        return value.length > 10;
      }
    }]
  });
  
 private _db;
    private _healthProfile;

    initDB() {
        this._db = new PouchDB('healthProfile', { adapter: 'websql' });
    }

  userProfile: any;

  constructor() {
    
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

var db = new PouchDB('healthProfile');  

let newDoc = {
        '_id': 'profile',
        'value': this.userProfile
    };

db.put(newDoc);
db.info().then(console.log.bind(console)); 


 
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

     
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
         
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
    
      });
    });
  };

  public login() {
    
    this.lock.show();
  };

  public authenticated() {
    
    return tokenNotExpired();
  };

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };
  
}
