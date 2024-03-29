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

let shownJob = "Comcast";
let lastPosition = 0;



// Header
setInterval(() => document.addEventListener('scroll',  function displayHeader() {
    const currentPosition = window.pageYOffset;

    // When position at the top of the page, the transform style attribute
    if (currentPosition <= 0) {
    document.getElementById('header').classList.remove('showHeader');
    return;
    }
    // Scrolling down makes header disappear
    else if (currentPosition > lastPosition && !document.getElementById('header').classList.contains('hideHeader')) {
    document.getElementById('header').classList.remove('showHeader');
    document.getElementById('header').classList.add('hideHeader');
    } 
    // Scrolling up makes header appear
    else if (currentPosition < lastPosition && document.getElementById('header').classList.contains('hideHeader')) {
    document.getElementById('header').classList.remove('hideHeader');
    document.getElementById('header').classList.add('showHeader');
    }
    lastPosition = currentPosition;

    document.removeEventListener('scroll', displayHeader)
}), 330);



// On Load
window.addEventListener('load', () => {
    job("Comcast");
    setInterval(changeStatement, 700);
});



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
    const statementContainer = document.querySelector('.statements');
    statementContainer.innerHTML = statement;
}



// Experience
const address = fetch("./jobs.json")
.then(response => {
    return response.json();
});

function job(input){
    document.getElementById(shownJob).classList.replace('clicked', 'unclicked');
    document.getElementById(input).classList.replace('unclicked', 'clicked');
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