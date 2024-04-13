'use strict';

// This app requires a server to handle import statements and CORS issues
import * as utils from './utils.js';

/* Login Jobsphere */

utils.print('app.js');

localStorage.setItem('username', 'user');
localStorage.setItem('password', 'jobfinder');

const username = utils.select('.username');
const password = utils.select('.password');
const message = utils.select('.message');
const login = utils.select('.login');

utils.listen('click', login, () => {

  if (username.value === localStorage.getItem('username') && 
  password.value === localStorage.getItem('password')) {
    location.href = 'home.html';
  } else {
    message.style.visibility = 'visible';
    setTimeout(() => {
        message.style.visibility = 'hidden';
    }, 2000);
  };
});

