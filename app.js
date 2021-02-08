document.getElementById("search-button").addEventListener("click", function () {
    const mealInput = document.getElementById("meal-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
        .then((res) => res.json())
        .then((data) => displayMeal(data.meals));
});

const row = document.getElementById("row");

const displayMeal = (foods) => {
    if (foods) {
        let foodInfo = "";
        foods.forEach((item) => {
            foodInfo += `
              <div class="col-md-3">
                  <div class="food">
                      <a onclick="displayMealDetail('${item.idMeal}')" href="#" class="food-link">
                      <img src = "${item.strMealThumb}" class="w-100 img-fluid" id="food-thumb">
                      <p id="food-name">${item.strMeal}</p>
                      </a>
                  </div>
              </div>
              `;
        });
        document.getElementById("row").innerHTML = foodInfo;
    }
};

const displayMealDetail = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMealDetail(data.meals[0]));
};

const showMealDetail = mealDetail => {
    console.log(mealDetail.strIngredient1);
    const mealDetailDiv = document.getElementById('meal-detail');
    mealDetailDiv.innerHTML = `
                    
                    <div class="ingredients">
                    <img class="w-100 img-fluid" src="${mealDetail.strMealThumb}">
                    <h3>${mealDetail.strMeal}</h3>
                    <h5>Ingredients</h5>
                    <P>${mealDetail.strIngredient1}</P>
                    <P>${mealDetail.strIngredient2}</P>
                    <P>${mealDetail.strIngredient3}</P>
                    <P>${mealDetail.strIngredient4}</P>
                    <P>${mealDetail.strIngredient5}</P>
                    <P>${mealDetail.strIngredient6}</P>
                    <P>${mealDetail.strIngredient7}</P>
                    <P>${mealDetail.strIngredient8}</P>
                    </div>
                    
    `
}


