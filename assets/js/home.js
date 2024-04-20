'use strict';

import * as utils from './utils.js';

/* Home Jobsphere */

utils.print('home.js');

const URL = 'https://randomuser.me/api/?nat=CA&results=10';
const columnThree = utils.select('.people');


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

        for (let i = 0; i < data.results.length; i++) {
            let profilePic = `${data.results[i].picture.medium}`;
            let fullName = `${data.results[i].name.first} ${data.results[i].name.last}`;
            let residence = `${data.results[i].location.city}`;

            displayUser(profilePic, fullName, residence);/* make a function named displayUsers 
        which displays 10 random users */
        };
        //utils.print(data.results);
    } catch(error) {
        utils.print(error.message);
    }
}

//getUsers(URL);

function displayUser(profilePic, fullName, residence) {

    const div = utils.create('div');

    div.classList.add('users');
    div.innerHTML = 
        `<div class='user-img' style='background-image:url(${profilePic})'></div>` +
         `<div class='user-info'>` + 
            `<div class='user-name'>${fullName}</div>` + 
            `<div class='user-city'>${residence}</div>` +
          `</div>`;

          columnThree.appendChild(div);
};


getUsers(URL);

