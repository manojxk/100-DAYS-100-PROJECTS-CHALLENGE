const getMealButton = document.getElementById("get_meal");
const mealContainer = document.getElementById("meal");

getMealButton.addEventListener("click", function () {
  console.log("clicked");

  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res);
      createMeal(res.meals[0]);
    })
    .catch(function (e) {
      console.warn(e);
    });
});



const createMeal =  (meal) =>{
  let ingredients = [];
  // Get all ingredients from the objects. up to 20
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} -${meal[`strMeasure${i}`]}`
      );
    } else {
      // Stop if no more ingredients
      break;
    }
  }

  const newInnerHtml = `
  <div class="row">
    <div class="col-lg-5">
      <img src="${meal.strMealThumb}" alt="Meal Image">
      ${
        meal.strCategory
          ? `<p><strong>Category: </strong> ${meal.strCategory}</p>`
          : ""
      }
      ${meal.strArea ? `<p><strong>Area: </strong> ${meal.strArea}</p>` : ""}
      ${
        meal.strTags
          ? `<p><strong>Tags: </strong> ${meal.strTags
              .split(",")
              .join(",")}</p>`
          : ""
      }
      <h5>Ingredients:</h5>
      <ul>
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      </ul>
    </div>
    <div class="col-lg-7">
      <h4>${meal.strMeal}</h4>
      <p>${meal.strInstructions}</p>
    </div>
   </div> 
  ${
    meal.strYoutube
      ? `
    <div class="row">
      <div class="col-md-12">
      <h5>Video Recipe</h5>
      </div>
      <div class="col-md-12">
       <div class="videowrapper">
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
          </iframe>
       </div>
      </div>
    </div>
    `
      : ""
  }
`;
  mealContainer.innerHTML = newInnerHtml;
};
