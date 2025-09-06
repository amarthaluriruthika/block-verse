const sampleData=async()=>
{
    try{
        let response=await fetch("https://www.google.com");
    console.log(response)
    }
    catch(err){
        confirm.length("error accessing Google:"+err)
    }

}
sampleData()