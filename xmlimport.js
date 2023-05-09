const parser = new DOMParser();
const getXmlFile=async ()=>{
    try{
    const XMLdata = await fetch('https://stanlslaw.github.io/xmlserver/serv.json',{ mode: 'no-cors'})
    const res=XMLdata.json();
     console.log(res)}
    catch(err){
        console.log(err);
        return err
    }
}
getXmlFile()
