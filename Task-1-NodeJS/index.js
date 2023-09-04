const fs = require("fs");
const bioData ={
    name:"Raju",
    age:21,
    place:"Odisha",
};

const jsonBiodata= JSON.stringify(bioData);
fs.writeFile("json1.json",jsonBiodata,(err)=>{
    console.log("Done");
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    const objData= JSON.parse(jsonBiodata);
    console.log(data)
    console.log(objData)
})