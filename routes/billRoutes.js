const express = require('express');
const BillModel = require("../model/billModel")

const router = express.Router()


router.post("/charge-bill", async (req, res) => {
    try {
        const newBill = new BillModel(req.body)
        await newBill.save()
        res.send("Bill Saved Successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get("/get-bill", async (req, res) => {
    try {
        const bills = await BillModel.find()
        res.send(bills)
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router