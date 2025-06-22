const express=require("express")

const router=express.Router()


const MenuItem=require("../models/MenuItem")

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenu=new MenuItem(data);
        const response=await newMenu.save()
        console.log("data saved successfully")
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internet server error"})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find()
        console.log("data fetched");
        res.send(data)


    }catch(err){
         console.log(err)
        res.status(500).json({error:"Internet server error"})
    }
})

router.get('/:taste',async(req,res)=>{
    try{
        const tasteType=req.params.taste
        if(tasteType=='sweet' || tasteType=='sour'|| tasteType=='spicy'){
            const response=await MenuItem.find({taste: tasteType})
            console.log("response fetched")
            res.status(200).json(response)
            
        }else{
            res.status(404).json({error: 'Invalid work Type'})
        }
       


    }catch(err){
         console.log(err)
        res.status(500).json({error:"Internet server error"})
    }
})


router.put("/:id",async(req,res)=>{
    try{
        const menuId=req.params.id;
        const updateMenuData=req.body

        const response=await MenuItem.findByIdAndUpdate(menuId,updateMenuData,{
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({error:"Person not found"})
        }

        console.log("Menu updated");

        res.status(200).json(response)


    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internet server error"})
    }
    

})


router.delete("/:id",async(req,res)=>{
    try{
        const menuId=req.params.id;

    const response=await MenuItem.findByIdAndDelete(menuId)

    if(!response){
            return res.status(404).json({error:"Person not found"})
        }

    console.log("Menu Item Deleted")
    res.status(200).json({message:"Mneu item deleted successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internet server error"})
    }
    
})

module.exports=router
