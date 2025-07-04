import { setAddress, setName } from "@/lib/store/userSlice";
import { useDispatch } from "react-redux";


function Contact(){
   let address='Nepal'
   let name='Prajjwol'
  const dispatch=useDispatch()
  dispatch (setName(name))
  dispatch (setAddress(address))
   return(
     <>
    <h1>This is contact page</h1>
    </>
   )
}

export default Contact