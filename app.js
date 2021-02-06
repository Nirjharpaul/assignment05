


document.getElementById('search-button').addEventListener('click', function () {
    const mealInput = document.getElementById('meal-input').value;
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => displayMeal(data))
        .catch(err => alert('Not Available This Meal'))
})



const displayMeal = food => {

}