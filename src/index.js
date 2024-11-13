import $ from 'jquery';   // Example of importing jQuery
import "./assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/styles.css';    // Import your CSS into the JavaScript bundle
import html from './login-password.html';  // Import the HTML file as a string
// Your JavaScript code
$(document).ready(function() {
    console.log("Hello, your custom UL is loaded - password!");
    document.body.innerHTML = html;
    //const storedUserName = localStorage.getItem('Username');
    const username = window.universal_login_transaction_data.unsafe_data.submitted_form_data.username;
    const qs = new URLSearchParams(location.search);
    const state = qs.get('state');
    const inputState = document.getElementById("state");
    inputState.value = state;
    const inputUsername = document.getElementById("username");
    inputUsername.value = username;

    console.log("window data: ", window.universal_login_transaction_data.unsafe_data);
    console.log("username: "+ username.value + " state: " + state);
});
