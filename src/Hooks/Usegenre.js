const Usegenre= (chosengenres)=>{
if(chosengenres.length<1)
return "";
const genreid=chosengenres.map((event)=>event.id)
return genreid.reduce((acc,curr)=>acc+','+curr);
}
export default Usegenre;