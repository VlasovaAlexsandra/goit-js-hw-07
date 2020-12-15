const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.table(ingredients);

const createIngredientCard = ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient.name;
  console.log(liRef);
  return createIngredientCard;
};

createIngredientCard(ingredients);

// const ulRef = document.createElement('ul');
// console.log(ulRef);
// // ulRef.id = 'ingredients';

// const liRef = document.createElement('li');
// liRef.textContent = ingredients[name];
// console.log(liRef);

// ulRef.appendChild(liRef);
// console.log(ulRef);

// const ingredientsCard = document.querySelector('#ingredients');

// ingredientsCard.appendChild(ulRef);
