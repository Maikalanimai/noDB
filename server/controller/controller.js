const ingredients = [
  {
    id: 0,
    name: "Pigman flesh",
    value: 2,
    quantity: 3
  },
  {
    id: 1,
    name: "Golden Avia Feather",
    value: 160,
    quantity: 24
  }
];

let valueSold = 0;

let id = 2;

module.exports = {
  getIngredients: (req, res) => {
    res.status(200).send({ingredients, valueSold});
  },
  addIngredient: (req, res) => {
    const { name, value, quantity } = req.body;
    let newIngredient = {
      name,
      value,
      quantity,
      id
    };
    id++;
    ingredients.push(newIngredient);
    res.status(201).send({ingredients, valueSold});
  },
  changeQuantity: (req, res) => {
    const { add } = req.query.add;
    const index = ingredients.findIndex(ing => ing.id === +req.params.id);

    add === true
      ? ingredients[index].quantity++
      : ingredients[index].quantity--;

    res.status(200).send({ingredients, valueSold});
  },
    sellIngredient: (req, res) => {
        const index = ingredients.findIndex(ing => ing.id === +req.params.id)
        valueSold = valueSold + (ingredients[index].value * ingredients[index].quantity)
        ingredients.splice(index, 1)
        res.status(200).send({ingredients, valueSold})
    }
};
