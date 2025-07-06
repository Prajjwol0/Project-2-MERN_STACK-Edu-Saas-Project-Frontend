

import { useAppSelector } from "@/lib/store/hooks"



function Haha(){

const{teacherName,teacherPassword}=useAppSelector((store)=>store.teacher)
    console.log(data.teacherName,data.teacherPassword)
    return(
        <h1>hahahahaha</h1>
    )
}