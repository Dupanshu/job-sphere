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

/* fetch(URL, options)
    .then(response => response.json())
    .then(json => json.results)
    .then(utils.print); 
*/

async function getUsers(endpoint) {

    try {
        const result = await fetch(endpoint, options);

        if(!result.ok) {
            throw new Error(`${result.statusText} (${result.status})`);
        }

        const data = await result.json();
        utils.print(data.results);
        //displayUsers(name, picture, city);/* make a function named displayUsers which displays 10 random users */
    } catch(error) {
        utils.print(error.message);
    }
}

getUsers(URL);