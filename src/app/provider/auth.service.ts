import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { }

login() {
  return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
logout() {
  return this.afAuth.auth.signOut();
}
}
