const Union =require("../models/unionSchema");

// create member
const createMember = async (req, res)=>{
    const newMember= new Union(
        {
            name: req.body.name,
            program: req.body.program,
            level:req.body.level,
            email:  req.body.email,
        } )
        await newMember.save()
        res.status(201).json(newMember);
    };

    const getAllMembers = async(req, res)=>{
        const Union = await Union.find();
        res.json(Members);
    }
     
    //get a Union
    const getSingleMember = async (req, res)=>{
          const unionMember =await Union.findById(req.params._id)
          res.json(Union);
    
    };
    
    //update a Union
    const  updateMember = async (req, res)=>{
        const foundMember = await Union.findById(req.params._id)
        if (foundMember) {
            foundMember.name = req.body.name,
            foundMember.destination = req.body.program,
            foundMember.email = req.body.level,
            foundMember.dob = req.body.email
    
            const updatedMember = await foundMember.save();
            res.json({updatedMember})
        }
    }
    
    //delete a Union
    const deleteMember = async (req, res)=>{
        const foundMember = await Union.findById(req.params._id)
        if (foundMember) {
            foundMember.remove()
            res.json({msg:`${foundMember.name} removed`})
        } else {
            res.status(404).json({error:"Union not found"})
        }
    }




    module.exports ={createMember,
        getAllMembers,
        getSingleMember,
         updateMember, deleteMember}
