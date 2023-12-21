const express = require('express');
const itemModel = require("../model/itemsModel")

const router = express.Router()


router.post("/add-items", async (req, res) => {
    try {
        const newItem = new itemModel(req.body)
        await newItem.save() //create a new item
        res.send("Item added successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get("/get-items", async (req, res) => {
    try {
        const items = await itemModel.find()
        res.send(items)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.post("/delete-items", async (req, res) => {
    try {
        const items = await itemModel.findOneAndDelete({ _id: req.body.itemId })
        items ? res.send("Item deleted Successfully") : res.status(401).send({ message: "Item Not found" })
    } catch (error) {
        res.status(400).json(error)
    }
})


router.post("/edit-items", async (req, res) => {
    try {
        await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body)
        res.send("Item updated Successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router