const Member =require("../models/unionSchema");

// create member
const createMember = async (req, res)=>{
    const newMember= new Member(
        {
            name: req.body.name,
            program: req.body.destination,
            level:req.body.email,
            email:  req.body.dob,
        } )
        await newMember.save()
        res.status(201).json(newMember);
    };

    const getAllMembers = async(req, res)=>{
        const Member = await Member.find();
        res.json(Members);
    }
     
    //get a Member
    const getSingleMember = async (req, res)=>{
          const trainee =await Member.findById(req.params._id)
          res.json(Member);
    
    };
    
    //update a Member
    const  updateMember = async (req, res)=>{
        const foundMember = await Trainee.findById(req.params._id)
        if (foundMember) {
            foundMember.name = req.body.name,
            foundMember.destination = req.body.program,
            foundMember.email = req.body.level,
            foundMember.dob = req.body.email
    
            const updatedMember = await foundMember.save();
            res.json({updatedMember})
        }
    }
    
    //delete a Member
    const deleteMember = async (req, res)=>{
        const foundMember = await Member.findById(req.params._id)
        if (foundMember) {
            foundMember.remove()
            res.json({msg:`${foundMember.name} removed`})
        } else {
            res.status(404).json({error:"Member not found"})
        }
    }




    module.exports ={createMember,
        getAllMembers,
        getSingleMember,
         updateMember, deleteMember}
