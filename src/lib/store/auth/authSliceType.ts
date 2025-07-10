import { Status } from "../../types/type"


export interface IUserData{
    username:string,
    password:string
}



export interface IInititalState{
user:IUserData,
status:Status
}