import { ChangeEvent, useState } from "react"


function Register(){
    const [data,setData]=useState<IRegisterData>({
        password:"",
        email:"",
        username:""
    })

    const handleRegisterDataChange=(e:ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target
setData({
    ...data,
    [name]:value
})
    }
    const handleRegisterSubmission = (e:ChangeEvent<HTMLFormElement>)=>{
        // api call
        
    }
    return(
     <>
        <h1>This is Register page (Under Construction)</h1>
     </>
    )
}

export default Register