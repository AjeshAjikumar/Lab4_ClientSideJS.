// Reference header and section elements
const header = document.querySelector('header');
const section = document.querySelector('section');

// Fetch and populate data
async function populate() {
    // Local JSON file URL
    const requestURL = 'js/json.js'; 
    const response = await fetch(requestURL);
    const jsonObj = await response.json();

    populateHeader(jsonObj);
    showTopFlavors(jsonObj);
}

// Populate Header
function populateHeader(jsonObj) {
    const h1 = document.createElement('h1');
    h1.textContent = jsonObj.companyName;

    const para = document.createElement('p');
    para.textContent = `Head Office: ${jsonObj.headOffice} | Established: ${jsonObj.established}`;

    header.appendChild(h1);
    header.appendChild(para);
}

// Display Top Flavors
function showTopFlavors(jsonObj) {
    const topFlavors = jsonObj.topFlavors;

    topFlavors.forEach(flavor => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const calories = document.createElement('p');
        const type = document.createElement('p');
        const ul = document.createElement('ul');

        h2.textContent = flavor.name;
        img.setAttribute('src', `images/${flavor.image}`);
        img.setAttribute('alt', flavor.name);
        calories.textContent = `Calories: ${flavor.calories}`;
        type.textContent = `Type: ${flavor.type}`;
        flavor.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        });

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(calories);
        article.appendChild(type);
        article.appendChild(ul);
        section.appendChild(article);
    });
}

// Initialize population
populate();
