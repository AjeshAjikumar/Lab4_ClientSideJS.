// JSON data
const jsonData = [
    {
        "name": "Monstrous Mint",
        "calories": 400,
        "type": "Ice Cream",
        "ingredients": ["peppermint cream", "dark chocolate chips", "vanilla extract"],
        "image": "images/chocolate-mint.svg"
    },
    {
        "name": "strawberry",
        "calories": 300,
        "type": "Regular",
        "ingredients": ["milk", "sugar", "strawberry extract", "strawberry chunks"],
        "image": "images/strawberrysmoothie.svg"
    },
    {
        "name": "pineapple",
        "calories": 400,
        "type": "Regular",
        "ingredients": ["milk", "sugar", "pineapple extract", "pineapple chunks"],
        "image": "images/pineapplesmoothie.svg"
    },
    {
        "name": "Perfect Peach Mango",
        "calories": 350,
        "type": "Sorbet",
        "ingredients": ["peach purée", "mango chunks", "clover honey"],
        "image": "images/peach-mango.svg"
    }
];

// Select the container
const container = document.querySelector("#data-container");

// Iterate over the JSON data
jsonData.forEach(item => {
    const article = document.createElement("article");

    // Image element
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    // Name element
    const name = document.createElement("h2");
    name.textContent = item.name;

    // Type element
    const type = document.createElement("p");
    type.textContent = `Type: ${item.type}`;

    // Calories element
    const calories = document.createElement("p");
    calories.textContent = `Calories: ${item.calories}`;

    // Ingredients list
    const ingredients = document.createElement("ul");
    ingredients.textContent = "Ingredients:";
    item.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredients.appendChild(li);
    });

    // Append elements to the article
    article.appendChild(img);
    article.appendChild(name);
    article.appendChild(type);
    article.appendChild(calories);
    article.appendChild(ingredients);

    // Append the article to the container
    container.appendChild(article);
});
