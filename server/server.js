const express = require('express')
const app =express()
const SERVER_PORT = 4000
const ctrl = require(`./controller/controller.js`)
//  * middle ware
app.use(express.json())
// * core functionality
app.get("/api/valueSold", ctrl.getValueSold)
app.get(`/api/ingredients` , ctrl.getIngredients)
app.post(`/api/ingredients`, ctrl.addIngredient)
app.put(`/api/ingredients/:id`, ctrl.changeQuantity)
app.delete(`/api/ingredients/:id`, ctrl.sellIngredient)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening`))