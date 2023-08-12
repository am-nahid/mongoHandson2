const {database}=require('../config/db')

const employee_collection =database.collection('employee')

// const array =[]
const addData =async (req,res)=>{
    const data = req.body
   const result = await employee_collection.insertOne(data)
    // array.push(data)
    res.send({
        msg:"succesfully added",data:result}
        )
}

const addMultipleData =async (req,res)=>{
    const data = req.body
   const result = await employee_collection.insertMany(data)
    // array.push(data)
    res.send({
        msg:"succesfully added",data:result}
        )
}

const fetchData = async(req,res)=>{
    const result = await employee_collection.find().toArray()
    res.send(result)
} 

const greaterThanSalary =async (req,res)=>{
    const result = await employee_collection.find({"salary":{"$gt":"30000"}}).toArray()
    res.send(result)
}

const greaterExperience =async (req,res)=>{
    const result = await employee_collection.find({"overallExp":{"$gt":"2"}}).toArray()
    res.send(result)
}

const graduatedExp =async (req,res)=>{
    const result = await employee_collection.find({"yearGrad":{"$gt":"2015"},"overallExp":{$gt:"1"}}).toArray()
    res.send(result)
}

const updateSalary =async (req,res)=>{
    const result = await employee_collection.updateOne({"salary":{"$gt":"70000"}},{"$set":{"salary":"65000"}})
    res.send(result)
}

const deleteEmployee =async (req,res)=>{
    const result = await employee_collection.deleteMany({"lastCompany":"Y"})
    res.send(result)
}

module.exports = {addData, addMultipleData, fetchData,greaterThanSalary, greaterExperience, graduatedExp, updateSalary, deleteEmployee}