const categoriesList = document.querySelector("#categories");

const categories = categoriesList.querySelectorAll("li.item");

console.log(`Number of catergories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemCount}`);
});
