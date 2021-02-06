document.getElementById('search-button').addEventListener('click', function () {
    const mealInput = document.getElementById('meal-input').value;
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => alert('Not Available This Meal'))
})



const displayMeal = meals => {


    // const foodsDiv = document.getElementById('meal-container')
    // for (let i = 0; i < meals.length; i++) {
    //     const foodItem = meals.categories[0];
    //     const foodDiv = document.createElement('div');
    //     foodDiv.innerText = foodItem.categories;
    //     foodsDiv.appendChild(foodDiv)
    // }
}
