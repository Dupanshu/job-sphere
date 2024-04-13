'use strict';

import * as utils from './utils.js';

/* Home Jobsphere */

utils.print('home.js');

const URL = 'https://randomuser.me/api/?nat=CA&results=10';

const options ={
    method: 'GET',
    headers: {
        'Content-Type': 'application/JSON; charset=UTF-8'
    },
    mode: 'cors'
}

