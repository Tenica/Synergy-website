const express = require('express')
const BasicSingle = require('../models/basicSingle')
const router = new express.Router()

router.get('/basicSingle', async ( req, res) => {
    
         
        
         res.render("basicSingle")

        
})



router.get('/basicSingle/:id', async (req, res) => {
    const _id = req.params.id


    try {
       const basicSingle = await BasicSingle.findById(_id)

       if (!basicSingle) {
        return res.status(404).send()
       }

       res.send(basicSingle)

    } catch(e)  {
        res.status(500).send(e)
    }
})




router.patch('/basicSingle/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'phone', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
 
    if  (!isValidOperation) {
         return res.status(400).send({error: 'invalid Updates'})
    }
 
    try {
       const basicSingle = await BasicSingle.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators:true})
 
       if (!basicSingle) {
           return res.status(404).send()
       }
       res.send(basicSingle)
 
    } catch (e) {
       res.status(400).send(e)
    }
 
 })



router.post('/basicSingle', async (req, res ) => {
       
    const basicSingle = new BasicSingle(req.body)
    

    try {
      await basicSingle.save()
      //send successful email to user
      res.status(200).send(basicSingle)
      
      
    } catch (e) {
      res.status(200).send(e.message)
    }
   
})

 


   
    
   

module.exports = router