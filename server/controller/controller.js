const ingredients = [
  
];

const valueSold = [0];

let id = 2;

module.exports = {
  getValueSold: (req, res) => {
    res.status(200).send(valueSold);
  },
  getIngredients: (req, res) => {
    res.status(200).send( ingredients);
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
    res.status(201).send( ingredients);
  },
  changeQuantity: (req, res) => {
    const { add } = req.query;
    const index = ingredients.findIndex(ing => ing.id === +req.params.id);
    add === "true"
      ? ingredients[index].quantity++
      : ingredients[index].quantity !== 0 
      ?ingredients[index].quantity--
      : console.log('unable to perform action requested. subtract from zero atempted');
    res.status(200).send( ingredients );
  },
  sellIngredient: (req, res) => {
    const index = ingredients.findIndex(ing => ing.id === +req.params.id);
    valueSold[0] =
      valueSold[0] + (ingredients[index].value * ingredients[index].quantity);
      console.log(valueSold[0])
    ingredients.splice(index, 1);
    res.status(200).send( ingredients);
  }
};
