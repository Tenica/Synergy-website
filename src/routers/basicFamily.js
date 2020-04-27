const express = require('express')
const BasicFamily = require('../models/basicSingle')
const router = new express.Router()








router.post('/basicFamily', async (req, res ) => {
    const basicFamily = new BasicFamily(req.body)

    try {
      await basicFamily.save()
      res.status(201).send(basicFamily)
    } catch (e) {
      res.status(400).send(e)
    }
   
})




router.get('/basicFamily', async (req, res) => {
    try {
         const basicFamily = await BasicFamily.find({})
         
        res.send(basicFamily)
    } catch (e) {
        res.status(500).send()
    }       
})


router.get('/basicFamily/:id', async (req, res) => {
    const _id = req.params.id


    try {
       const basicFamily = await BasicFamily.findById(_id)

       if (!basicFamily) {
        return res.status(404).send()
       }

       res.send(basicFamily)

    } catch(e)  {
        res.status(500).send(e)
    }
})




router.patch('/basicFamily/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'phone', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
 
    if  (!isValidOperation) {
         return res.status(400).send({error: 'invalid Updates'})
    }
 
    try {
       const basicFamily = await BasicFamily.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators:true})
 
       if (!basicFamily) {
           return res.status(404).send()
       }
       res.send(basicFamily)
 
    } catch (e) {
       res.status(400).send(e)
    }
 
 })


 module.exports = router