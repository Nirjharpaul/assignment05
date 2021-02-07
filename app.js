document.getElementById('search-button').addEventListener('click', function () {
    const mealInput = document.getElementById('meal-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals));
    // .catch (error => alert('Not Available This Meal'))
})



const displayMeal = foods => {

    // foods.forEach(item => console.log(item));

    foods.forEach(item => {

        const foodsDiv = document.getElementById('meal-container');

        const foodDiv = document.createElement('div')
        foodDiv.className = 'food';

        const foodInfo = `
                        <div class="col-md-3">
                            <div class="-food-item" mealId="${item.idMeal}">
                                <a href="#" class="food-link">
                                <img src = "${item.strMealThumb}" id="food-thumb" class="w-100 img-fluid">
                                <p id="food-name">${item.strMeal}</p>
                                </a>
                            </div>
                        </div>
                        `

        foodDiv.innerHTML = foodInfo
        foodsDiv.appendChild(foodDiv);

    });

}