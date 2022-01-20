const { closeDelimiter } = require('ejs')
const { request } = require('express')
const express=require('express')
const router= express.Router()
router.get('/',(req,res)=>{
    console.log(res.locals.user)
    res.send('User list'+res.locals.user)
    res.render()
    })
router.get('/new',(req,res)=>{
    res.send('New form')
    })
router.post('/',(req,res)=>{
        res.send('Create User')
        })
router.param("id",(req,res,next,id)=>{
    console.log(id)
    //middleware stuff that runs between the request
    // being sent to the server and the response being sent
    // to the user  . Param is ran First
})
module.exports = router //to make it available for importing