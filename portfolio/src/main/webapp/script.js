// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

setInterval(changeStatement, 700);
let shownJob = "Comcast";
// let scrollingActive = false;


// Header
// document.getElementsByTagName('body').onscroll = function (){
//     console.log("scrolled");
//     document.getElementById('header').style.position = "sticky";
// };


// setInterval(() => {
//     scrollingActive
//     if (document.click == true) {
//         console.log("scroll");
//         document.querySelector('.header').style.position = "sticky";
//     } if (false) {
//         console.log("no scroll");
//         document.querySelector('.header').style.position = "static";
//     }
// }, 300);


// Home
function changeStatement() {
    const statements = [
        "I am 5'4.", 
        'My last name is French for "beautiful man".', 
        'I cannot swim.', 
        'My first name means "bitter" in French.'
    ];
  
    // Pick a random fun fact.
    const statement = statements[Math.floor(Math.random() * statements.length)];
  
    // Add it to the page.
    const statementContainer = document.getElementById('statements');
    statementContainer.innerHTML = statement;
}



// Experience
window.addEventListener('load', () => job("Comcast"));

const address = fetch("./jobs.json")
.then(response => {
    return response.json();
});

function job(input){
    document.getElementById(shownJob).style.backgroundColor = "transparent";
    document.getElementById(input).style.backgroundColor = "coral";
    getJob(input);
    shownJob = input;
}

async function getJob(input) {
    try {
        const jobs = await address;
        document.getElementById('company').innerHTML = "@ " + jobs[input].company;
        document.getElementById('title').innerHTML = jobs[input].title;
        document.getElementById('date').innerHTML = jobs[input].date;

        document.getElementById('description').innerHTML = ""
        for (x of jobs[input].description) {
            let list = document.createElement('li');
            let node = document.createTextNode(x);
            list.appendChild(node);
            document.getElementById('description').appendChild(list);
        }
    } catch (err) {
      console.log(err);
    }
}