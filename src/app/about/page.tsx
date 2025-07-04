import { useSelector } from "react-redux"



 function About(){
     // userSlice ---> name, address ma j basxa tyo chaiyeko / fetch
   const data= useSelector((store)=>store.user) //initialState ko access paunu vayo

   data.name 
   data.address

return(

    <>
    <h1>This is about page</h1>
</>
)
}


export default About