/**
 * FileName: app.js
 * 
 * @author Kenneth Bato
 * @date July 8, 2016
 * 
 * StudentID: 300448795
 * 
 * @website
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    // User Class +++++++++++++++++++++++++++++++
    var User = (function () {
        // Constructor ++++++++++++++++++++++++++++
        function User(uname, passwd) {
            this.uname = uname;
            this.passwd = passwd;
        }
        return User;
    } ());

    // function to print user credentials to the console
    function printUserCredentials(user) {
        console.log("+++++++++++++++++++++++++++");
        console.log("Username: " + user.uname);
        console.log("Password: " + user.passwd);
        console.log("+++++++++++++++++++++++++++");
    }
    // create form reference
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", onFormSubmit);
    
    // form submit function to create new object user and call printUserCredentials
     function onFormSubmit(event){
        event.preventDefault();
        // create reference to form fields
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        // create new user object
        var user = new User(username.value, password.value);
        printUserCredentials(user);
        loginForm.reset();
     }
         
})();