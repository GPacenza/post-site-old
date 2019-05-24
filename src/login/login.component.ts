import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {

    // if (auth.user){
      // console.log("you're already logged in!", auth.user)
      // alert("You're already logged in!")
    // }

  }

  // loginGoogle() {
  //   this.auth.googleLogin()
  // }

  loginGoogle() {
    var firebase = require("firebase/app");
    if (firebase.auth().currentUser){
      this.auth.signOut()
      document.getElementById("loginout").innerHTML = "Suscribase con Gmail"
    } else{
      this.auth.googleLogin()
      if (firebase.auth().currentUser){
        document.getElementById("loginout").innerHTML = "Suscribase con Gmail"
      }

    }
      // We want to log in with google
      // get information from firebase on whether or not user has registered plants
      // if not, immediately redirect the user by calling some redirect function
    //}
  }


  ngOnInit() {
    // var firebase = require("firebase/app")
    // if (firebase.auth().currentUser){
    //   document.getElementById("loginout").innerHTML = "Logout";//"Login with Google"
    // }else{
    //   document.getElementById("loginout").innerHTML = "Suscribase con Gmail";//"Logout"
    // }
  }

}


//after login, user redirected to this page, submits plant info, and is redirected
//to page of the first selected plant

// Do we want user to have to do this every time?
// Create new field in DB to keep track of whether or not user has done this
// When user first submits data, set field to true
// Every subsequent login, check the value of this field before having the user
// submit the form
// Add a component/form for the user to update their preferences
// Link for this component should only be accessible if user is logged in
